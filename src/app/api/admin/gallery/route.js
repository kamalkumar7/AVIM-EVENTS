import { withAdmin, ok, err } from "@/lib/apiHelpers";
import prisma from "@/lib/prisma";

export async function GET() {
  return withAdmin(async () => {
    const items = await prisma.galleryItem.findMany({ orderBy: { order: "asc" } });
    return ok(items);
  });
}

export async function POST(req) {
  return withAdmin(async () => {
    const body = await req.json();
    if (!body.title || !body.category) return err("title and category required");
    const last = await prisma.galleryItem.findFirst({ orderBy: { order: "desc" } });
    const item = await prisma.galleryItem.create({
      data: { category: body.category, title: body.title, imageUrl: body.imageUrl ?? null, order: (last?.order ?? -1) + 1, active: body.active ?? true },
    });
    return ok(item);
  });
}
