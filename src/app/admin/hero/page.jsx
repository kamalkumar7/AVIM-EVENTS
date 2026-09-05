"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/admin/Modal";
import ImageUpload from "@/components/admin/ImageUpload";
import AdminImage from "@/components/admin/AdminImage";

export default function HeroPage() {
  const [slides, setSlides] = useState([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ imageUrl: "", order: 0, active: true });
  const [loading, setLoading] = useState(false);

  const [initialLoad, setInitialLoad] = useState(true);

  async function load() {
    const res = await fetch("/api/admin/hero");
    const data = await res.json();
    setSlides(data);
    setInitialLoad(false);
  }

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  function openAdd() {
    setEditing(null);
    setForm({ imageUrl: "", order: slides.length, active: true });
    setModal(true);
  }

  function openEdit(slide) {
    setEditing(slide);
    setForm({ imageUrl: slide.imageUrl, order: slide.order, active: slide.active });
    setModal(true);
  }

  async function save() {
    if (!form.imageUrl) return alert("Image required");
    setLoading(true);
    if (editing) {
      await fetch(`/api/admin/hero/${editing.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } else {
      await fetch("/api/admin/hero", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    }
    setLoading(false);
    setModal(false);
    load();
  }

  async function remove(id) {
    if (!confirm("Delete this slide?")) return;
    await fetch(`/api/admin/hero/${id}`, { method: "DELETE" });
    load();
  }

  async function toggle(slide) {
    await fetch(`/api/admin/hero/${slide.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ active: !slide.active }) });
    load();
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">Hero Slides</h1>
          <p className="text-gray-400 text-sm mt-0.5">Manage the full-screen slideshow on the homepage.</p>
        </div>
        <button onClick={openAdd} className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-lg transition-colors">+ Add Slide</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {slides.map((slide, i) => (
          <div key={slide.id} className={`relative rounded-xl overflow-hidden border ${slide.active ? "border-gray-700" : "border-gray-800 opacity-50"} group`}>
            <AdminImage src={slide.imageUrl} alt={`Slide ${i + 1}`} className="w-full h-40 object-cover" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <button onClick={() => openEdit(slide)} className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg">Edit</button>
              <button onClick={() => remove(slide.id)} className="text-xs bg-red-500/20 hover:bg-red-500/40 text-red-300 px-3 py-1.5 rounded-lg">Delete</button>
            </div>
            <div className="absolute top-2 left-2 flex gap-1.5">
              <span className="bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded">#{slide.order + 1}</span>
              {!slide.active && <span className="bg-red-500/60 text-white text-[10px] px-1.5 py-0.5 rounded">Hidden</span>}
            </div>
            <button onClick={() => toggle(slide)} className={`absolute top-2 right-2 text-[10px] px-1.5 py-0.5 rounded ${slide.active ? "bg-green-500/30 text-green-300" : "bg-gray-500/30 text-gray-300"}`}>
              {slide.active ? "Active" : "Inactive"}
            </button>
          </div>
        ))}
        {initialLoad ? (
          <div className="col-span-full flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
          </div>
        ) : slides.length === 0 ? (
          <p className="text-gray-500 text-sm col-span-3">No slides yet. Add one above.</p>
        ) : null}
      </div>

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? "Edit Slide" : "Add Slide"}>
        <div className="space-y-4">
          <ImageUpload label="Slide Image" folder="avim-events/hero" value={form.imageUrl} onChange={(url) => setForm({ ...form, imageUrl: url })} />
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-xs text-gray-400 mb-1">Order</label>
              <input type="number" value={form.order} onChange={(e) => setForm({ ...form, order: +e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" />
            </div>
            <div className="flex items-end pb-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="accent-amber-500" />
                <span className="text-sm text-gray-300">Active</span>
              </label>
            </div>
          </div>
          <button onClick={save} disabled={loading} className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold py-2.5 rounded-lg text-sm">
            {loading ? "Saving…" : editing ? "Update Slide" : "Add Slide"}
          </button>
        </div>
      </Modal>
    </div>
  );
}
