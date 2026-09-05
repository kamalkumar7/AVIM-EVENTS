"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/admin/Modal";
import ImageUpload from "@/components/admin/ImageUpload";
import AdminImage from "@/components/admin/AdminImage";

export default function PropertiesPage() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", logoUrl: "", active: true });
  const [loading, setLoading] = useState(false);

  const [initialLoad, setInitialLoad] = useState(true);

  async function load() {
    const res = await fetch("/api/admin/properties");
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
      await fetch(`/api/admin/properties/${editing.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } else {
      await fetch("/api/admin/properties", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    }
    setLoading(false); setModal(false); load();
  }

  async function remove(id) {
    if (!confirm("Delete this property?")) return;
    await fetch(`/api/admin/properties/${id}`, { method: "DELETE" });
    load();
  }

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">Properties</h1>
          <p className="text-gray-400 text-sm mt-0.5">Hotel & venue property logos shown on the homepage.</p>
        </div>
        <button onClick={openAdd} className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-lg">+ Add Property</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className={`bg-gray-800 border border-gray-700 rounded-xl p-4 flex flex-col items-center gap-3 group relative ${!item.active ? "opacity-50" : ""}`}>
            <AdminImage src={item.logoUrl} alt={item.name} className="h-10 object-contain w-20" />
            <p className="text-xs text-gray-300 text-center">{item.name}</p>
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => openEdit(item)} className="text-[10px] bg-gray-700 hover:bg-gray-600 text-white px-1.5 py-0.5 rounded">Edit</button>
              <button onClick={() => remove(item.id)} className="text-[10px] bg-red-500/30 hover:bg-red-500/50 text-red-300 px-1.5 py-0.5 rounded">Del</button>
            </div>
          </div>
        ))}
        {initialLoad ? (
          <div className="col-span-full flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
          </div>
        ) : items.length === 0 ? (
          <p className="text-gray-500 text-sm col-span-4">No properties yet.</p>
        ) : null}
      </div>

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? "Edit Property" : "Add Property"}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Property Name *</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="e.g. JW Marriott" />
          </div>
          <ImageUpload label="Logo" folder="avim-events/properties" value={form.logoUrl} onChange={(url) => setForm({ ...form, logoUrl: url })} />
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="accent-amber-500" />
            <span className="text-sm text-gray-300">Show on site</span>
          </label>
          <button onClick={save} disabled={loading} className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold py-2.5 rounded-lg text-sm">
            {loading ? "Saving…" : editing ? "Update" : "Add Property"}
          </button>
        </div>
      </Modal>
    </div>
  );
}
