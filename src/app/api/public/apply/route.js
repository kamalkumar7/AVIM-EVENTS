import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req) {
  const body = await req.json();
  if (!body.name || !body.email) {
    return NextResponse.json({ error: "Name and email required" }, { status: 400 });
  }
  const applicant = await prisma.applicant.create({
    data: { name: body.name, email: body.email, phone: body.phone ?? null, role: body.role ?? null, message: body.message ?? null },
  });
  return NextResponse.json({ ok: true, id: applicant.id });
}
