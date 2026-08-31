import { withAdmin, ok, err } from "@/lib/apiHelpers";
import prisma from "@/lib/prisma";

export async function GET(req) {
  return withAdmin(async () => {
    const { searchParams } = new URL(req.url);
    const section = searchParams.get("section");
    const where = section ? { section } : {};
    const items = await prisma.counterStat.findMany({ where, orderBy: [{ section: "asc" }, { order: "asc" }] });
    return ok(items);
  });
}

export async function POST(req) {
  return withAdmin(async () => {
    const body = await req.json();
    if (!body.section || !body.label) return err("section and label required");
    const last = await prisma.counterStat.findFirst({ where: { section: body.section }, orderBy: { order: "desc" } });
    const item = await prisma.counterStat.create({
      data: { section: body.section, value: body.value ?? 0, suffix: body.suffix ?? "+", label: body.label, sublabel: body.sublabel ?? null, order: (last?.order ?? -1) + 1, active: body.active ?? true },
    });
    return ok(item);
  });
}
