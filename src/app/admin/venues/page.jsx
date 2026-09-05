"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/admin/Modal";
import ImageUpload from "@/components/admin/ImageUpload";
import AdminImage from "@/components/admin/AdminImage";

const TIERS = [
  { value: "palatial", label: "Palatial 5-Star Partners" },
  { value: "elite", label: "Elite Collections" },
];

export default function VenuesPage() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", location: "", tag: "", tier: "palatial", imageUrl: "", active: true });
  const [loading, setLoading] = useState(false);

  const [initialLoad, setInitialLoad] = useState(true);

  async function load() {
    const res = await fetch("/api/admin/venues");
    setItems(await res.json());
    setInitialLoad(false);
  }
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  function openAdd() { setEditing(null); setForm({ name: "", location: "", tag: "", tier: "palatial", imageUrl: "", active: true }); setModal(true); }
  function openEdit(item) { setEditing(item); setForm({ name: item.name, location: item.location, tag: item.tag ?? "", tier: item.tier, imageUrl: item.imageUrl ?? "", active: item.active }); setModal(true); }

  async function save() {
    if (!form.name) return alert("Name required");
    setLoading(true);
    if (editing) {
      await fetch(`/api/admin/venues/${editing.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } else {
      await fetch("/api/admin/venues", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    }
    setLoading(false); setModal(false); load();
  }

  async function remove(id) {
    if (!confirm("Delete?")) return;
    await fetch(`/api/admin/venues/${id}`, { method: "DELETE" });
    load();
  }

  const grouped = TIERS.map((t) => ({ ...t, items: items.filter((i) => i.tier === t.value) }));

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">Venues</h1>
          <p className="text-gray-400 text-sm mt-0.5">Venue partner cards on the /venues page.</p>
        </div>
        <button onClick={openAdd} className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-lg">+ Add Venue</button>
      </div>

      {initialLoad ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        grouped.map((group) => (
          <div key={group.value} className="mb-8">
            <h2 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />{group.label}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {group.items.map((item) => (
                <div key={item.id} className={`bg-gray-800 border border-gray-700 rounded-xl overflow-hidden group ${!item.active ? "opacity-50" : ""}`}>
                  <AdminImage src={item.imageUrl} alt={item.name} className="w-full h-28 object-cover" />
                  <div className="p-3">
                    <div className="flex items-center gap-1 flex-wrap">
                      <p className="text-white text-xs font-semibold">{item.name}</p>
                      {item.tag && <span className="text-[10px] bg-amber-500/20 text-amber-400 px-1 rounded">{item.tag}</span>}
                    </div>
                    <p className="text-gray-500 text-[10px] mt-0.5">{item.location}</p>
                    <div className="flex gap-2 mt-2">
                      <button onClick={() => openEdit(item)} className="text-[10px] text-gray-400 hover:text-white">Edit</button>
                      <button onClick={() => remove(item.id)} className="text-[10px] text-red-400 hover:text-red-300">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
              {group.items.length === 0 && <p className="text-gray-600 text-xs col-span-3">None yet.</p>}
            </div>
          </div>
        ))
      )}

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? "Edit Venue" : "Add Venue"}>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Name *</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="e.g. Taj Palace" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Location</label>
              <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="e.g. New Delhi, India" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Tag</label>
              <input value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="e.g. Featured" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Tier *</label>
              <select value={form.tier} onChange={(e) => setForm({ ...form, tier: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm">
                {TIERS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
          </div>
          <ImageUpload label="Image" folder="avim-events/venues" value={form.imageUrl} onChange={(url) => setForm({ ...form, imageUrl: url })} />
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="accent-amber-500" />
            <span className="text-sm text-gray-300">Show on site</span>
          </label>
          <button onClick={save} disabled={loading} className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold py-2.5 rounded-lg text-sm">
            {loading ? "Saving…" : editing ? "Update" : "Add Venue"}
          </button>
        </div>
      </Modal>
    </div>
  );
}
