"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/admin/Modal";
import ImageUpload from "@/components/admin/ImageUpload";
import AdminImage from "@/components/admin/AdminImage";

export default function TeamPage() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", role: "", location: "", description: "", initials: "", imageUrl: "", active: true });
  const [loading, setLoading] = useState(false);

  const [initialLoad, setInitialLoad] = useState(true);

  async function load() {
    const res = await fetch("/api/admin/team");
    setItems(await res.json());
    setInitialLoad(false);
  }
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  function openAdd() { setEditing(null); setForm({ name: "", role: "", location: "", description: "", initials: "", imageUrl: "", active: true }); setModal(true); }
  function openEdit(item) { setEditing(item); setForm({ name: item.name, role: item.role, location: item.location ?? "", description: item.description ?? "", initials: item.initials ?? "", imageUrl: item.imageUrl ?? "", active: item.active }); setModal(true); }

  async function save() {
    if (!form.name || !form.role) return alert("Name and role required");
    setLoading(true);
    if (editing) {
      await fetch(`/api/admin/team/${editing.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } else {
      await fetch("/api/admin/team", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    }
    setLoading(false); setModal(false); load();
  }

  async function remove(id) {
    if (!confirm("Delete this team member?")) return;
    await fetch(`/api/admin/team/${id}`, { method: "DELETE" });
    load();
  }

  async function toggle(item) {
    await fetch(`/api/admin/team/${item.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ active: !item.active }) });
    load();
  }

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">Team Members</h1>
          <p className="text-gray-400 text-sm mt-0.5">Leadership & execution team shown on the About page.</p>
        </div>
        <button onClick={openAdd} className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-lg">+ Add Member</button>
      </div>

      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={item.id} className={`flex items-center gap-4 bg-gray-800 border border-gray-700 rounded-xl px-5 py-4 ${!item.active ? "opacity-50" : ""}`}>
            <span className="text-gray-500 text-xs w-5 text-center">{i + 1}</span>
            <AdminImage src={item.imageUrl} alt={item.name} className="w-9 h-9 rounded-full object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm">{item.name}</p>
              <p className="text-gray-400 text-xs">{item.role}{item.location ? ` • ${item.location}` : ""}</p>
            </div>
            <div className="flex gap-2 items-center">
              <button onClick={() => toggle(item)} className={`text-xs px-2 py-0.5 rounded ${item.active ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}`}>{item.active ? "Visible" : "Hidden"}</button>
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
          <p className="text-gray-500 text-sm">No team members yet.</p>
        ) : null}
      </div>

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? "Edit Team Member" : "Add Team Member"}>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Name *</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Role *</label>
              <input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Location</label>
              <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="e.g. Bangalore" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Initials</label>
              <input value={form.initials} onChange={(e) => setForm({ ...form, initials: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="e.g. SA" maxLength={3} />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Description</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm resize-none" />
          </div>
          <ImageUpload label="Photo (optional)" folder="avim-events/team" value={form.imageUrl} onChange={(url) => setForm({ ...form, imageUrl: url })} />
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="accent-amber-500" />
            <span className="text-sm text-gray-300">Show on site</span>
          </label>
          <button onClick={save} disabled={loading} className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold py-2.5 rounded-lg text-sm">
            {loading ? "Saving…" : editing ? "Update" : "Add Member"}
          </button>
        </div>
      </Modal>
    </div>
  );
}
