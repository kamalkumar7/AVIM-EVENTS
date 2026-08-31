import { withAdmin, ok } from "@/lib/apiHelpers";
import prisma from "@/lib/prisma";

export async function GET() {
  return withAdmin(async () => {
    const items = await prisma.applicant.findMany({ orderBy: { createdAt: "desc" } });
    return ok(items);
  });
}
