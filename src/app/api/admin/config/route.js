import { withAdmin, ok, err } from "@/lib/apiHelpers";
import prisma from "@/lib/prisma";

export async function GET(req) {
  return withAdmin(async () => {
    const { searchParams } = new URL(req.url);
    const section = searchParams.get("section");
    const where = section ? { section } : {};
    const configs = await prisma.siteConfig.findMany({ where, orderBy: [{ section: "asc" }, { key: "asc" }] });
    return ok(configs);
  });
}

export async function PUT(req) {
  return withAdmin(async () => {
    const body = await req.json();
    // body: { section, key, value } or array of same
    const items = Array.isArray(body) ? body : [body];
    const results = await Promise.all(
      items.map(({ section, key, value }) =>
        prisma.siteConfig.upsert({
          where: { section_key: { section, key } },
          update: { value },
          create: { section, key, value },
        })
      )
    );

    // Sync to first leader if about_leadership was modified
    if (items.some((i) => i.section === "about_leadership")) {
      const allLeadershipConfigs = await prisma.siteConfig.findMany({
        where: { section: "about_leadership" },
      });
      const cfg = {};
      allLeadershipConfigs.forEach((c) => (cfg[c.key] = c.value));

      const firstLeader = await prisma.leader.findFirst({ orderBy: { order: "asc" } });
      if (firstLeader) {
        await prisma.leader.update({
          where: { id: firstLeader.id },
          data: {
            name: cfg.name || "Name",
            title: cfg.title || "Title",
            description: cfg.body || "",
            quote: cfg.vision_quote || "",
            imageUrl: cfg.photo_url || "",
          },
        });
      } else {
        await prisma.leader.create({
          data: {
            name: cfg.name || "Name",
            title: cfg.title || "Title",
            description: cfg.body || "",
            quote: cfg.vision_quote || "",
            imageUrl: cfg.photo_url || "",
            order: 0,
            active: true,
          },
        });
      }
    }

    return ok(results);
  });
}
