"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/admin/Modal";
import ImageUpload from "@/components/admin/ImageUpload";
import AdminImage from "@/components/admin/AdminImage";

export default function LeadersPage() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", title: "", description: "", quote: "", imageUrl: "", active: true });
  const [loading, setLoading] = useState(false);

  const [initialLoad, setInitialLoad] = useState(true);

  async function load() {
    const res = await fetch("/api/admin/leaders");
    setItems(await res.json());
    setInitialLoad(false);
  }
  
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  function openAdd() { 
    setEditing(null); 
    setForm({ name: "", title: "", description: "", quote: "", imageUrl: "", active: true }); 
    setModal(true); 
  }
  
  function openEdit(item) { 
    setEditing(item); 
    setForm({ 
      name: item.name, 
      title: item.title, 
      description: item.description ?? "", 
      quote: item.quote ?? "", 
      imageUrl: item.imageUrl ?? "", 
      active: item.active 
    }); 
    setModal(true); 
  }

  async function save() {
    if (!form.name || !form.title) return alert("Name and title required");
    setLoading(true);
    if (editing) {
      await fetch(`/api/admin/leaders/${editing.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } else {
      await fetch("/api/admin/leaders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    }
    setLoading(false); setModal(false); load();
  }

  async function remove(id) {
    if (!confirm("Delete this leader?")) return;
    await fetch(`/api/admin/leaders/${id}`, { method: "DELETE" });
    load();
  }

  async function toggle(item) {
    await fetch(`/api/admin/leaders/${item.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ active: !item.active }) });
    load();
  }

  return (
    <div className="p-8 w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Leadership</h1>
          <p className="text-gray-500 text-sm mt-0.5">Manage the leaders displayed in the About page slider.</p>
        </div>
        <button onClick={openAdd} className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-lg">+ Add Leader</button>
      </div>

      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={item.id} className={`flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-4 ${!item.active ? "opacity-50" : ""}`}>
            <span className="text-gray-500 text-xs w-5 text-center">{i + 1}</span>
            <AdminImage src={item.imageUrl} alt={item.name} className="w-10 h-12 rounded object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-gray-900 font-medium text-sm">{item.name}</p>
              <p className="text-gray-500 text-xs">{item.title}</p>
            </div>
            <div className="flex gap-2 items-center">
              {item.isDefault && <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-600 font-medium">Default</span>}
              <button onClick={() => toggle(item)} className={`text-xs px-2 py-0.5 rounded ${item.active ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-500"}`}>{item.active ? "Visible" : "Hidden"}</button>
              <button onClick={() => openEdit(item)} className="text-xs text-gray-500 hover:text-gray-900">Edit</button>
              {!item.isDefault && <button onClick={() => remove(item.id)} className="text-xs text-red-400 hover:text-red-300">Delete</button>}
            </div>
          </div>
        ))}
        {initialLoad ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
          </div>
        ) : items.length === 0 ? (
          <p className="text-gray-500 text-sm">No leaders added yet.</p>
        ) : null}
      </div>

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? "Edit Leader" : "Add Leader"}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Name *</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-900 text-sm" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Title *</label>
              <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-900 text-sm" placeholder="e.g. Founder & Managing Director" />
            </div>
          </div>
          
          <div>
            <label className="block text-xs text-gray-500 mb-1">Description (Bio) *</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={4} className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-900 text-sm" />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Vision Statement (Quote)</label>
            <textarea value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} rows={2} className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-900 text-sm" />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Photo (Vertical ratio recommended)</label>
            <ImageUpload value={form.imageUrl} onChange={(url) => setForm({ ...form, imageUrl: url })} />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="leader-active" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="rounded border-gray-300 text-amber-500 focus:ring-amber-500" />
            <label htmlFor="leader-active" className="text-sm text-gray-700">Active (visible on site)</label>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button onClick={() => setModal(false)} className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">Cancel</button>
            <button onClick={save} disabled={loading} className="px-4 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50">
              {loading ? "Saving..." : "Save Leader"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
