import { withAdmin, ok } from "@/lib/apiHelpers";
import prisma from "@/lib/prisma";

export async function PUT(req, { params }) {
  return withAdmin(async () => {
    const { id } = await params;
    const body = await req.json();
    const item = await prisma.enquiry.update({ where: { id }, data: { read: body.read } });
    return ok(item);
  });
}

export async function DELETE(_, { params }) {
  return withAdmin(async () => {
    const { id } = await params;
    await prisma.enquiry.delete({ where: { id } });
    return ok({ deleted: true });
  });
}
