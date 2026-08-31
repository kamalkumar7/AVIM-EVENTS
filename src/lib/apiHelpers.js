import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/session";

export async function withAdmin(handler) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return handler();
}

export function ok(data) {
  return NextResponse.json(data);
}

export function err(message, status = 400) {
  return NextResponse.json({ error: message }, { status });
}
