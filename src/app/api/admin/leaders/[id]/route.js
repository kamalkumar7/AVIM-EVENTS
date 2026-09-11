import { withAdmin, ok, err } from "@/lib/apiHelpers";
import prisma from "@/lib/prisma";

export async function PUT(req, { params }) {
  return withAdmin(async () => {
    const { id } = await params;
    const body = await req.json();

    let item;
    if (id === "__default__") {
      item = await prisma.leader.create({
        data: {
          name: body.name,
          title: body.title,
          description: body.description ?? "",
          quote: body.quote ?? null,
          imageUrl: body.imageUrl ?? null,
          order: 0,
          active: body.active ?? true,
        },
      });
    } else {
      item = await prisma.leader.update({ where: { id }, data: body });
    }

    // Sync to site config if this is the first leader
    const firstLeader = await prisma.leader.findFirst({ orderBy: { order: "asc" } });
    if (firstLeader && firstLeader.id === item.id) {
      const updates = [
        { section: "about_leadership", key: "name", value: item.name },
        { section: "about_leadership", key: "title", value: item.title },
        { section: "about_leadership", key: "body", value: item.description },
        { section: "about_leadership", key: "vision_quote", value: item.quote || "" },
        { section: "about_leadership", key: "photo_url", value: item.imageUrl || "" },
      ];
      await Promise.all(
        updates.map(({ section, key, value }) =>
          prisma.siteConfig.upsert({
            where: { section_key: { section, key } },
            update: { value },
            create: { section, key, value },
          })
        )
      );
    }

    return ok(item);
  });
}

export async function DELETE(_, { params }) {
  return withAdmin(async () => {
    const { id } = await params;

    const firstLeader = await prisma.leader.findFirst({ orderBy: { order: "asc" } });
    if (firstLeader && firstLeader.id === id) {
      return err("The primary leader cannot be deleted", 400);
    }

    await prisma.leader.delete({ where: { id } });

    // Sync new first leader to site config
    const newFirst = await prisma.leader.findFirst({ orderBy: { order: "asc" } });
    if (newFirst) {
      const updates = [
        { section: "about_leadership", key: "name", value: newFirst.name },
        { section: "about_leadership", key: "title", value: newFirst.title },
        { section: "about_leadership", key: "body", value: newFirst.description },
        { section: "about_leadership", key: "vision_quote", value: newFirst.quote || "" },
        { section: "about_leadership", key: "photo_url", value: newFirst.imageUrl || "" },
      ];
      await Promise.all(
        updates.map(({ section, key, value }) =>
          prisma.siteConfig.upsert({
            where: { section_key: { section, key } },
            update: { value },
            create: { section, key, value },
          })
        )
      );
    }

    return ok({ deleted: true });
  });
}
