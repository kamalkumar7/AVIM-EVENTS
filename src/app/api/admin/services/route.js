import { withAdmin, ok, err } from "@/lib/apiHelpers";
import prisma from "@/lib/prisma";

export async function GET(req) {
  return withAdmin(async () => {
    const { searchParams } = new URL(req.url);
    const section = searchParams.get("section");
    const where = section ? { section } : {};
    const items = await prisma.serviceCard.findMany({ where, orderBy: [{ section: "asc" }, { order: "asc" }] });
    return ok(items);
  });
}

export async function POST(req) {
  return withAdmin(async () => {
    const body = await req.json();
    if (!body.title || !body.section) return err("title and section required");
    const last = await prisma.serviceCard.findFirst({ where: { section: body.section }, orderBy: { order: "desc" } });
    const item = await prisma.serviceCard.create({
      data: { section: body.section, title: body.title, description: body.description ?? "", bullets: body.bullets ?? null, imageUrl: body.imageUrl ?? null, icon: body.icon ?? null, badge: body.badge ?? null, order: (last?.order ?? -1) + 1, active: body.active ?? true },
    });
    return ok(item);
  });
}
