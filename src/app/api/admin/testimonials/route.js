import { withAdmin, ok, err } from "@/lib/apiHelpers";
import prisma from "@/lib/prisma";

export async function GET() {
  return withAdmin(async () => {
    const items = await prisma.testimonial.findMany({ orderBy: { order: "asc" } });
    return ok(items);
  });
}

export async function POST(req) {
  return withAdmin(async () => {
    const body = await req.json();
    if (!body.author || !body.quote) return err("author and quote required");
    const last = await prisma.testimonial.findFirst({ orderBy: { order: "desc" } });
    const item = await prisma.testimonial.create({
      data: { author: body.author, quote: body.quote, timeAgo: body.timeAgo ?? "", order: (last?.order ?? -1) + 1, active: body.active ?? true },
    });
    return ok(item);
  });
}
