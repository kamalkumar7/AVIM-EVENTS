import { withAdmin, ok } from "@/lib/apiHelpers";
import prisma from "@/lib/prisma";

export async function PUT(req, { params }) {
  return withAdmin(async () => {
    const { id } = await params;
    const body = await req.json();
    const item = await prisma.venueCard.update({ where: { id }, data: body });
    return ok(item);
  });
}

export async function DELETE(_, { params }) {
  return withAdmin(async () => {
    const { id } = await params;
    await prisma.venueCard.delete({ where: { id } });
    return ok({ deleted: true });
  });
}
