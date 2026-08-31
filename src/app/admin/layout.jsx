import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata = { title: "Admin | AVIM Events" };

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <AdminSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
