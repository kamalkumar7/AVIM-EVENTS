import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/session";

export async function withAdmin(handler) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    return await handler();
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
  }
}

export function ok(data) {
  return NextResponse.json(data);
}

export function err(message, status = 400) {
  return NextResponse.json({ error: message }, { status });
}
