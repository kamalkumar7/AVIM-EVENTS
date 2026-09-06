import AdminSidebar from "@/components/admin/AdminSidebar";
import { getSession } from "@/lib/session";

export const metadata = { title: "Admin | AVIM Events" };

export default async function AdminLayout({ children }) {
  const session = await getSession();

  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f5f4] text-gray-900">
      {session?.isAdmin && <AdminSidebar />}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
