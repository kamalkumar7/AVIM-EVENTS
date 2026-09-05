"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/admin/Modal";

export default function MilestonesPage() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: "", badge: "", description: "", location: "", featured: false, active: true });
  const [loading, setLoading] = useState(false);

  const [initialLoad, setInitialLoad] = useState(true);

  async function load() {
    const res = await fetch("/api/admin/milestones");
    setItems(await res.json());
    setInitialLoad(false);
  }
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  function openAdd() { setEditing(null); setForm({ title: "", badge: "", description: "", location: "", featured: false, active: true }); setModal(true); }
  function openEdit(item) { setEditing(item); setForm({ title: item.title, badge: item.badge ?? "", description: item.description ?? "", location: item.location ?? "", featured: item.featured, active: item.active }); setModal(true); }

  async function save() {
    if (!form.title) return alert("Title required");
    setLoading(true);
    if (editing) {
      await fetch(`/api/admin/milestones/${editing.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } else {
      await fetch("/api/admin/milestones", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    }
    setLoading(false); setModal(false); load();
  }

  async function remove(id) {
    if (!confirm("Delete?")) return;
    await fetch(`/api/admin/milestones/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">Milestones</h1>
          <p className="text-gray-400 text-sm mt-0.5">Global achievements shown on the About page.</p>
        </div>
        <button onClick={openAdd} className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-lg">+ Add Milestone</button>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className={`flex gap-4 items-start bg-gray-800 border ${item.featured ? "border-amber-500/40" : "border-gray-700"} rounded-xl p-5 ${!item.active ? "opacity-50" : ""}`}>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <p className="text-white font-semibold text-sm">{item.title}</p>
                {item.badge && <span className="text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded">{item.badge}</span>}
                {item.featured && <span className="text-[10px] bg-amber-500/30 text-amber-300 px-1.5 py-0.5 rounded">Featured</span>}
                {item.location && <span className="text-[10px] text-gray-500">{item.location}</span>}
              </div>
              {item.description && <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{item.description}</p>}
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => openEdit(item)} className="text-xs text-gray-400 hover:text-white">Edit</button>
              <button onClick={() => remove(item.id)} className="text-xs text-red-400 hover:text-red-300">Delete</button>
            </div>
          </div>
        ))}
        {initialLoad ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
          </div>
        ) : items.length === 0 ? (
          <p className="text-gray-500 text-sm">No milestones yet.</p>
        ) : null}
      </div>

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? "Edit Milestone" : "Add Milestone"}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Title *</label>
            <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="e.g. Dubai Work – Palazzo Versace" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Badge</label>
              <input value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="e.g. Dubai" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Location</label>
              <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="e.g. Dubai" />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm resize-none" />
          </div>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="accent-amber-500" />
              <span className="text-sm text-gray-300">Featured (large card)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="accent-amber-500" />
              <span className="text-sm text-gray-300">Active</span>
            </label>
          </div>
          <button onClick={save} disabled={loading} className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold py-2.5 rounded-lg text-sm">
            {loading ? "Saving…" : editing ? "Update" : "Add Milestone"}
          </button>
        </div>
      </Modal>
    </div>
  );
}
