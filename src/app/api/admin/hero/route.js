import { withAdmin, ok, err } from "@/lib/apiHelpers";
import prisma from "@/lib/prisma";

export async function GET() {
  return withAdmin(async () => {
    const slides = await prisma.heroSlide.findMany({ orderBy: { order: "asc" } });
    return ok(slides);
  });
}

export async function POST(req) {
  return withAdmin(async () => {
    const body = await req.json();
    if (!body.imageUrl) return err("imageUrl required");
    const last = await prisma.heroSlide.findFirst({ orderBy: { order: "desc" } });
    const slide = await prisma.heroSlide.create({
      data: { imageUrl: body.imageUrl, order: (last?.order ?? -1) + 1, active: body.active ?? true },
    });
    return ok(slide);
  });
}
