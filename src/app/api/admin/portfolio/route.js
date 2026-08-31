import { withAdmin, ok, err } from "@/lib/apiHelpers";
import prisma from "@/lib/prisma";

export async function GET() {
  return withAdmin(async () => {
    const items = await prisma.portfolioItem.findMany({ orderBy: { order: "asc" } });
    return ok(items);
  });
}

export async function POST(req) {
  return withAdmin(async () => {
    const body = await req.json();
    if (!body.title || !body.category) return err("title and category required");
    const last = await prisma.portfolioItem.findFirst({ orderBy: { order: "desc" } });
    const item = await prisma.portfolioItem.create({
      data: { category: body.category, title: body.title, subtitle: body.subtitle ?? null, imageUrl: body.imageUrl ?? null, order: (last?.order ?? -1) + 1, active: body.active ?? true },
    });
    return ok(item);
  });
}
