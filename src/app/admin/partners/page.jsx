"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/admin/Modal";
import ImageUpload from "@/components/admin/ImageUpload";

export default function PartnersPage() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", logoUrl: "", active: true });
  const [loading, setLoading] = useState(false);

  const [initialLoad, setInitialLoad] = useState(true);

  async function load() {
    const res = await fetch("/api/admin/partners");
    setItems(await res.json());
    setInitialLoad(false);
  }
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  function openAdd() { setEditing(null); setForm({ name: "", logoUrl: "", active: true }); setModal(true); }
  function openEdit(item) { setEditing(item); setForm({ name: item.name, logoUrl: item.logoUrl ?? "", active: item.active }); setModal(true); }

  async function save() {
    if (!form.name) return alert("Name required");
    setLoading(true);
    if (editing) {
      await fetch(`/api/admin/partners/${editing.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } else {
      await fetch("/api/admin/partners", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    }
    setLoading(false); setModal(false); load();
  }

  async function remove(id) {
    if (!confirm("Delete this partner?")) return;
    await fetch(`/api/admin/partners/${id}`, { method: "DELETE" });
    load();
  }

  async function toggle(item) {
    await fetch(`/api/admin/partners/${item.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ active: !item.active }) });
    load();
  }

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">Partners / Tieups</h1>
          <p className="text-gray-400 text-sm mt-0.5">Wedding & corporate partner logos in the infinite marquee.</p>
        </div>
        <button onClick={openAdd} className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-lg">+ Add Partner</button>
      </div>

      <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left px-5 py-3 text-xs text-gray-400 uppercase tracking-wider">Logo</th>
              <th className="text-left px-5 py-3 text-xs text-gray-400 uppercase tracking-wider">Name</th>
              <th className="text-left px-5 py-3 text-xs text-gray-400 uppercase tracking-wider">Order</th>
              <th className="text-left px-5 py-3 text-xs text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-800 hover:bg-gray-800/30">
                <td className="px-5 py-3">
                  {item.logoUrl ? <img src={item.logoUrl} alt={item.name} className="h-8 w-8 object-contain rounded" /> : <span className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-[10px] text-gray-500">N/A</span>}
                </td>
                <td className="px-5 py-3 text-white font-medium">{item.name}</td>
                <td className="px-5 py-3 text-gray-400">{item.order}</td>
                <td className="px-5 py-3">
                  <button onClick={() => toggle(item)} className={`text-xs px-2 py-0.5 rounded ${item.active ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}`}>
                    {item.active ? "Active" : "Hidden"}
                  </button>
                </td>
                <td className="px-5 py-3 text-right">
                  <button onClick={() => openEdit(item)} className="text-xs text-gray-400 hover:text-white mr-4">Edit</button>
                  <button onClick={() => remove(item.id)} className="text-xs text-red-400 hover:text-red-300">Delete</button>
                </td>
              </tr>
            ))}
            {initialLoad ? (
              <tr>
                <td colSpan={5} className="py-20 text-center">
                  <div className="inline-block w-8 h-8 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
                </td>
              </tr>
            ) : items.length === 0 ? (
              <tr><td colSpan={5} className="px-5 py-8 text-center text-gray-500">No partners yet.</td></tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? "Edit Partner" : "Add Partner"}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Name *</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="e.g. Meragi" />
          </div>
          <ImageUpload label="Logo (optional)" folder="avim-events/partners" value={form.logoUrl} onChange={(url) => setForm({ ...form, logoUrl: url })} />
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="accent-amber-500" />
            <span className="text-sm text-gray-300">Show in marquee</span>
          </label>
          <button onClick={save} disabled={loading} className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold py-2.5 rounded-lg text-sm">
            {loading ? "Saving…" : editing ? "Update" : "Add Partner"}
          </button>
        </div>
      </Modal>
    </div>
  );
}
