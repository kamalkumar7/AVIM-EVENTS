"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/admin/Modal";

export default function TestimonialsPage() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ author: "", quote: "", timeAgo: "", active: true });
  const [loading, setLoading] = useState(false);

  async function load() {
    const res = await fetch("/api/admin/testimonials");
    setItems(await res.json());
  }
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  function openAdd() { setEditing(null); setForm({ author: "", quote: "", timeAgo: "", active: true }); setModal(true); }
  function openEdit(item) { setEditing(item); setForm({ author: item.author, quote: item.quote, timeAgo: item.timeAgo, active: item.active }); setModal(true); }

  async function save() {
    if (!form.author || !form.quote) return alert("Author and quote required");
    setLoading(true);
    if (editing) {
      await fetch(`/api/admin/testimonials/${editing.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } else {
      await fetch("/api/admin/testimonials", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    }
    setLoading(false); setModal(false); load();
  }

  async function remove(id) {
    if (!confirm("Delete this testimonial?")) return;
    await fetch(`/api/admin/testimonials/${id}`, { method: "DELETE" });
    load();
  }

  async function toggle(item) {
    await fetch(`/api/admin/testimonials/${item.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ active: !item.active }) });
    load();
  }

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">Testimonials</h1>
          <p className="text-gray-400 text-sm mt-0.5">Client reviews shown in the homepage carousel.</p>
        </div>
        <button onClick={openAdd} className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-lg">+ Add Review</button>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className={`bg-gray-800 border border-gray-700 rounded-xl p-5 flex gap-4 ${!item.active ? "opacity-50" : ""}`}>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold text-sm">{item.author}</span>
                <span className="text-gray-500 text-xs">{item.timeAgo}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{item.quote}</p>
            </div>
            <div className="flex items-start gap-2 shrink-0">
              <button onClick={() => toggle(item)} className={`text-xs px-2 py-0.5 rounded ${item.active ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}`}>
                {item.active ? "Visible" : "Hidden"}
              </button>
              <button onClick={() => openEdit(item)} className="text-xs text-gray-400 hover:text-white">Edit</button>
              <button onClick={() => remove(item.id)} className="text-xs text-red-400 hover:text-red-300">Delete</button>
            </div>
          </div>
        ))}
        {items.length === 0 && <p className="text-gray-500 text-sm">No testimonials yet.</p>}
      </div>

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? "Edit Testimonial" : "Add Testimonial"}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Author Name *</label>
            <input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="e.g. Prashobh Jayachandran" />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Time Ago</label>
            <input value={form.timeAgo} onChange={(e) => setForm({ ...form, timeAgo: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="e.g. 2 months ago" />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Review Text *</label>
            <textarea value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} rows={5} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm resize-none" placeholder="Enter the full testimonial text…" />
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="accent-amber-500" />
            <span className="text-sm text-gray-300">Show on site</span>
          </label>
          <button onClick={save} disabled={loading} className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold py-2.5 rounded-lg text-sm">
            {loading ? "Saving…" : editing ? "Update" : "Add Testimonial"}
          </button>
        </div>
      </Modal>
    </div>
  );
}
