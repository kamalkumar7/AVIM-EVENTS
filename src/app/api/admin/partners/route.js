import { withAdmin, ok, err } from "@/lib/apiHelpers";
import prisma from "@/lib/prisma";

export async function GET() {
  return withAdmin(async () => {
    const items = await prisma.tieupPartner.findMany({ orderBy: { order: "asc" } });
    return ok(items);
  });
}

export async function POST(req) {
  return withAdmin(async () => {
    const body = await req.json();
    if (!body.name) return err("name required");
    const last = await prisma.tieupPartner.findFirst({ orderBy: { order: "desc" } });
    const item = await prisma.tieupPartner.create({
      data: { name: body.name, logoUrl: body.logoUrl ?? null, order: (last?.order ?? -1) + 1, active: body.active ?? true },
    });
    return ok(item);
  });
}
