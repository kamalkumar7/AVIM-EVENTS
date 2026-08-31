"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/admin/Modal";
import ImageUpload from "@/components/admin/ImageUpload";

const SECTIONS = [
  { value: "home", label: "Home Page Cards" },
  { value: "services_main", label: "Services Page – Main" },
  { value: "services_more", label: "Services Page – More Services" },
];

export default function ServicesPage() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ section: "home", title: "", description: "", bullets: "", imageUrl: "", icon: "", badge: "", active: true });
  const [loading, setLoading] = useState(false);

  async function load() {
    const res = await fetch("/api/admin/services");
    setItems(await res.json());
  }
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  function openAdd() { setEditing(null); setForm({ section: "home", title: "", description: "", bullets: "", imageUrl: "", icon: "", badge: "", active: true }); setModal(true); }
  function openEdit(item) {
    setEditing(item);
    setForm({ section: item.section, title: item.title, description: item.description, bullets: item.bullets ? JSON.parse(item.bullets).join("\n") : "", imageUrl: item.imageUrl ?? "", icon: item.icon ?? "", badge: item.badge ?? "", active: item.active });
    setModal(true);
  }

  async function save() {
    if (!form.title || !form.section) return alert("Title and section required");
    setLoading(true);
    const payload = { ...form, bullets: form.bullets ? JSON.stringify(form.bullets.split("\n").filter(Boolean)) : null };
    if (editing) {
      await fetch(`/api/admin/services/${editing.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    } else {
      await fetch("/api/admin/services", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    }
    setLoading(false); setModal(false); load();
  }

  async function remove(id) {
    if (!confirm("Delete?")) return;
    await fetch(`/api/admin/services/${id}`, { method: "DELETE" });
    load();
  }

  async function toggle(item) {
    await fetch(`/api/admin/services/${item.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ active: !item.active }) });
    load();
  }

  const grouped = SECTIONS.map((s) => ({ ...s, items: items.filter((i) => i.section === s.value) }));

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">Services</h1>
          <p className="text-gray-400 text-sm mt-0.5">Service cards on the Home and Services pages.</p>
        </div>
        <button onClick={openAdd} className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-lg">+ Add Service</button>
      </div>

      {grouped.map((group) => (
        <div key={group.value} className="mb-8">
          <h2 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />{group.label}
          </h2>
          <div className="space-y-2">
            {group.items.map((item) => (
              <div key={item.id} className={`flex gap-4 items-center bg-gray-800 border border-gray-700 rounded-xl px-5 py-4 ${!item.active ? "opacity-50" : ""}`}>
                {item.imageUrl && <img src={item.imageUrl} alt={item.title} className="w-12 h-10 object-cover rounded" />}
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm">{item.title}</p>
                  <p className="text-gray-400 text-xs truncate">{item.description}</p>
                </div>
                <div className="flex gap-2 items-center shrink-0">
                  <button onClick={() => toggle(item)} className={`text-xs px-2 py-0.5 rounded ${item.active ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}`}>{item.active ? "On" : "Off"}</button>
                  <button onClick={() => openEdit(item)} className="text-xs text-gray-400 hover:text-white">Edit</button>
                  <button onClick={() => remove(item.id)} className="text-xs text-red-400">Delete</button>
                </div>
              </div>
            ))}
            {group.items.length === 0 && <p className="text-gray-600 text-xs">None yet.</p>}
          </div>
        </div>
      ))}

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? "Edit Service" : "Add Service"}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Section *</label>
            <select value={form.section} onChange={(e) => setForm({ ...form, section: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm">
              {SECTIONS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Title *</label>
              <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Badge</label>
              <input value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="e.g. ✦ GUEST HOSPITALITY" />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm resize-none" />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Bullet Points (one per line)</label>
            <textarea value={form.bullets} onChange={(e) => setForm({ ...form, bullets: e.target.value })} rows={4} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm resize-none font-mono" placeholder={"RSVP support\nFlight/travel bookings\nAirport reception"} />
          </div>
          <ImageUpload label="Image (optional)" folder="avim-events/services" value={form.imageUrl} onChange={(url) => setForm({ ...form, imageUrl: url })} />
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="accent-amber-500" />
            <span className="text-sm text-gray-300">Active</span>
          </label>
          <button onClick={save} disabled={loading} className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold py-2.5 rounded-lg text-sm">
            {loading ? "Saving…" : editing ? "Update" : "Add Service"}
          </button>
        </div>
      </Modal>
    </div>
  );
}
