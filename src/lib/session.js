import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export const sessionOptions = {
  password: process.env.IRON_SESSION_SECRET,
  cookieName: "avim_admin_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
  },
};

export async function getSession() {
  const cookieStore = await cookies();
  return getIronSession(cookieStore, sessionOptions);
}

export async function requireAdmin() {
  const session = await getSession();
  if (!session.isAdmin) {
    return null;
  }
  return session;
}
