import { withAdmin, ok, err } from "@/lib/apiHelpers";
import prisma from "@/lib/prisma";

export async function GET() {
  return withAdmin(async () => {
    const items = await prisma.teamMember.findMany({ orderBy: { order: "asc" } });
    return ok(items);
  });
}

export async function POST(req) {
  return withAdmin(async () => {
    const body = await req.json();
    if (!body.name || !body.role) return err("name and role required");
    const last = await prisma.teamMember.findFirst({ orderBy: { order: "desc" } });
    const item = await prisma.teamMember.create({
      data: { name: body.name, role: body.role, location: body.location ?? null, description: body.description ?? null, initials: body.initials ?? null, imageUrl: body.imageUrl ?? null, order: (last?.order ?? -1) + 1, active: body.active ?? true },
    });
    return ok(item);
  });
}
