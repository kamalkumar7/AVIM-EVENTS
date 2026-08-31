"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/admin/Modal";

export default function ApplicantsPage() {
  const [items, setItems] = useState([]);
  const [viewing, setViewing] = useState(null);

  async function load() {
    const res = await fetch("/api/admin/applicants");
    setItems(await res.json());
  }
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  async function markRead(item) {
    await fetch(`/api/admin/applicants/${item.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ read: true }) });
    load();
  }

  async function remove(id) {
    if (!confirm("Delete?")) return;
    await fetch(`/api/admin/applicants/${id}`, { method: "DELETE" });
    if (viewing?.id === id) setViewing(null);
    load();
  }

  const unread = items.filter((i) => !i.read).length;

  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-white">Applicants</h1>
        <p className="text-gray-400 text-sm mt-0.5">Job applications submitted via the Careers form. {unread > 0 && <span className="text-amber-400">{unread} unread.</span>}</p>
      </div>

      <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left px-5 py-3 text-xs text-gray-400 uppercase tracking-wider">Name</th>
              <th className="text-left px-5 py-3 text-xs text-gray-400 uppercase tracking-wider">Email</th>
              <th className="text-left px-5 py-3 text-xs text-gray-400 uppercase tracking-wider">Role</th>
              <th className="text-left px-5 py-3 text-xs text-gray-400 uppercase tracking-wider">Date</th>
              <th className="text-left px-5 py-3 text-xs text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className={`border-b border-gray-800 hover:bg-gray-800/30 ${!item.read ? "bg-amber-500/5" : ""}`}>
                <td className="px-5 py-3 text-white font-medium flex items-center gap-2">
                  {!item.read && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />}
                  {item.name}
                </td>
                <td className="px-5 py-3 text-gray-300">{item.email}</td>
                <td className="px-5 py-3 text-gray-400">{item.role || "—"}</td>
                <td className="px-5 py-3 text-gray-500 text-xs">{new Date(item.createdAt).toLocaleDateString("en-IN")}</td>
                <td className="px-5 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded ${item.read ? "bg-gray-500/20 text-gray-400" : "bg-amber-500/20 text-amber-400"}`}>{item.read ? "Read" : "New"}</span>
                </td>
                <td className="px-5 py-3 text-right">
                  <button onClick={() => { setViewing(item); if (!item.read) markRead(item); }} className="text-xs text-gray-400 hover:text-white mr-4">View</button>
                  <button onClick={() => remove(item.id)} className="text-xs text-red-400 hover:text-red-300">Delete</button>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr><td colSpan={6} className="px-5 py-10 text-center text-gray-500">No applications yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal open={!!viewing} onClose={() => setViewing(null)} title="Application Details">
        {viewing && (
          <div className="space-y-3 text-sm">
            <Row label="Name" value={viewing.name} />
            <Row label="Email" value={viewing.email} />
            <Row label="Phone" value={viewing.phone || "—"} />
            <Row label="Role" value={viewing.role || "—"} />
            <Row label="Date" value={new Date(viewing.createdAt).toLocaleString("en-IN")} />
            {viewing.message && (
              <div>
                <p className="text-gray-400 text-xs mb-1">Message</p>
                <p className="text-white bg-gray-800 rounded-lg p-3 whitespace-pre-wrap">{viewing.message}</p>
              </div>
            )}
            <button onClick={() => remove(viewing.id)} className="mt-4 text-xs text-red-400 hover:text-red-300">Delete this application</button>
          </div>
        )}
      </Modal>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div>
      <p className="text-gray-400 text-xs">{label}</p>
      <p className="text-white">{value}</p>
    </div>
  );
}
