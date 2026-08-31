import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req) {
  const body = await req.json();
  if (!body.name || !body.email) {
    return NextResponse.json({ error: "Name and email required" }, { status: 400 });
  }
  const enquiry = await prisma.enquiry.create({
    data: { name: body.name, email: body.email, phone: body.phone ?? null, eventType: body.eventType ?? null, eventDate: body.eventDate ?? null, message: body.message ?? null },
  });
  return NextResponse.json({ ok: true, id: enquiry.id });
}
