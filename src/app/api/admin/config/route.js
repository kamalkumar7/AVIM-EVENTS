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
    return ok(results);
  });
}
