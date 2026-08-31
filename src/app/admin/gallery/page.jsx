"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/admin/Modal";
import ImageUpload from "@/components/admin/ImageUpload";

const CATEGORIES = ["ALL", "WEDDING", "CORPORATE", "SOCIAL"];

export default function GalleryPage() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ category: "WEDDING", title: "", imageUrl: "", active: true });
  const [loading, setLoading] = useState(false);

  async function load() {
    const res = await fetch("/api/admin/gallery");
    setItems(await res.json());
  }
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  function openAdd() { setEditing(null); setForm({ category: "WEDDING", title: "", imageUrl: "", active: true }); setModal(true); }
  function openEdit(item) { setEditing(item); setForm({ category: item.category, title: item.title, imageUrl: item.imageUrl ?? "", active: item.active }); setModal(true); }

  async function save() {
    if (!form.title || !form.category) return alert("Title and category required");
    setLoading(true);
    if (editing) {
      await fetch(`/api/admin/gallery/${editing.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } else {
      await fetch("/api/admin/gallery", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    }
    setLoading(false); setModal(false); load();
  }

  async function remove(id) {
    if (!confirm("Delete?")) return;
    await fetch(`/api/admin/gallery/${id}`, { method: "DELETE" });
    load();
  }

  async function toggle(item) {
    await fetch(`/api/admin/gallery/${item.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ active: !item.active }) });
    load();
  }

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">Gallery</h1>
          <p className="text-gray-400 text-sm mt-0.5">Items on the /gallery page with filter tabs.</p>
        </div>
        <button onClick={openAdd} className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-lg">+ Add Item</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className={`relative rounded-xl overflow-hidden border border-gray-700 group ${!item.active ? "opacity-50" : ""}`}>
            {item.imageUrl ? (
              <div className="w-full h-40 bg-cover bg-center" style={{ backgroundImage: `url(${item.imageUrl})` }} />
            ) : (
              <div className="w-full h-40 bg-gray-800 flex items-center justify-center text-gray-600 text-xs">No image</div>
            )}
            <div className="p-3 bg-gray-800">
              <p className="text-[10px] text-amber-400 uppercase tracking-wider">{item.category}</p>
              <p className="text-white text-xs font-medium mt-0.5 truncate">{item.title}</p>
            </div>
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => toggle(item)} className={`text-[10px] px-1.5 py-0.5 rounded ${item.active ? "bg-green-500/30 text-green-300" : "bg-gray-500/30 text-gray-300"}`}>{item.active ? "On" : "Off"}</button>
              <button onClick={() => openEdit(item)} className="text-[10px] bg-gray-700 text-white px-1.5 py-0.5 rounded">Edit</button>
              <button onClick={() => remove(item.id)} className="text-[10px] bg-red-500/30 text-red-300 px-1.5 py-0.5 rounded">Del</button>
            </div>
          </div>
        ))}
        {items.length === 0 && <p className="text-gray-500 text-sm col-span-3">No gallery items yet.</p>}
      </div>

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? "Edit Gallery Item" : "Add Gallery Item"}>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Category *</label>
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm">
                {["WEDDING", "CORPORATE", "SOCIAL"].map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Title *</label>
              <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="e.g. The Royal Mandap" />
            </div>
          </div>
          <ImageUpload label="Image" folder="avim-events/gallery" value={form.imageUrl} onChange={(url) => setForm({ ...form, imageUrl: url })} />
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="accent-amber-500" />
            <span className="text-sm text-gray-300">Show on site</span>
          </label>
          <button onClick={save} disabled={loading} className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold py-2.5 rounded-lg text-sm">
            {loading ? "Saving…" : editing ? "Update" : "Add Item"}
          </button>
        </div>
      </Modal>
    </div>
  );
}
