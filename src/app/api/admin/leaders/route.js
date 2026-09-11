import { withAdmin, ok, err } from "@/lib/apiHelpers";
import prisma from "@/lib/prisma";

export async function GET() {
  return withAdmin(async () => {
    const items = await prisma.leader.findMany({ orderBy: { order: "asc" } });

    if (items.length === 0) {
      const configs = await prisma.siteConfig.findMany({ where: { section: "about_leadership" } });
      const cfg = Object.fromEntries(configs.map((c) => [c.key, c.value]));
      if (cfg.name || cfg.title) {
        return ok([{
          id: "__default__",
          name: cfg.name || "",
          title: cfg.title || "",
          description: cfg.body || "",
          quote: cfg.vision_quote || "",
          imageUrl: cfg.photo_url || "",
          order: 0,
          active: true,
          isDefault: true,
        }]);
      }
      return ok([]);
    }

    return ok(items.map((item, i) => ({ ...item, isDefault: i === 0 })));
  });
}

export async function POST(req) {
  return withAdmin(async () => {
    const body = await req.json();
    if (!body.name || !body.title) return err("name and title required");
    const last = await prisma.leader.findFirst({ orderBy: { order: "desc" } });
    const item = await prisma.leader.create({
      data: { 
        name: body.name, 
        title: body.title, 
        description: body.description ?? "", 
        quote: body.quote ?? null, 
        imageUrl: body.imageUrl ?? null, 
        order: (last?.order ?? -1) + 1, 
        active: body.active ?? true 
      },
    });

    // Sync to site config if this is the only leader
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
