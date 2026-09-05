import AdminSidebar from "@/components/admin/AdminSidebar";
import { getSession } from "@/lib/session";

export const metadata = { title: "Admin | AVIM Events" };

export default async function AdminLayout({ children }) {
  const session = await getSession();

  return (
    <div className="flex min-h-screen bg-[#080808] text-gray-100">
      {session?.isAdmin && <AdminSidebar />}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
