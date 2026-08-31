import { withAdmin, ok, err } from "@/lib/apiHelpers";
import prisma from "@/lib/prisma";

export async function GET() {
  return withAdmin(async () => {
    const items = await prisma.venueCard.findMany({ orderBy: [{ tier: "asc" }, { order: "asc" }] });
    return ok(items);
  });
}

export async function POST(req) {
  return withAdmin(async () => {
    const body = await req.json();
    if (!body.name || !body.tier) return err("name and tier required");
    const last = await prisma.venueCard.findFirst({ where: { tier: body.tier }, orderBy: { order: "desc" } });
    const item = await prisma.venueCard.create({
      data: { name: body.name, location: body.location ?? "", tier: body.tier, tag: body.tag ?? null, imageUrl: body.imageUrl ?? null, order: (last?.order ?? -1) + 1, active: body.active ?? true },
    });
    return ok(item);
  });
}
