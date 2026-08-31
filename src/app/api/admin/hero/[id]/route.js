import { withAdmin, ok, err } from "@/lib/apiHelpers";
import prisma from "@/lib/prisma";

export async function PUT(req, { params }) {
  return withAdmin(async () => {
    const { id } = await params;
    const body = await req.json();
    const slide = await prisma.heroSlide.update({ where: { id }, data: body });
    return ok(slide);
  });
}

export async function DELETE(_, { params }) {
  return withAdmin(async () => {
    const { id } = await params;
    await prisma.heroSlide.delete({ where: { id } });
    return ok({ deleted: true });
  });
}
