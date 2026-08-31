import { NextResponse } from "next/server";
import { getIronSession, nextProxyCookies } from "iron-session";
import { sessionOptions } from "@/lib/session";

export async function proxy(req) {
  const { pathname } = req.nextUrl;

  if (pathname === "/admin/login") return NextResponse.next();
  if (!pathname.startsWith("/admin")) return NextResponse.next();

  const res = NextResponse.next();
  const session = await getIronSession(nextProxyCookies(req, res), sessionOptions);

  if (!session.isAdmin) {
    const loginUrl = new URL("/admin/login", req.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return res;
}

export const config = {
  matcher: ["/admin/:path*"],
};
