"use client";
import { useState, useEffect } from "react";
import Modal from "@/components/admin/Modal";

const SECTIONS = [
  { value: "home", label: "Home Counters" },
  { value: "about", label: "About Stats" },
];

export default function StatsPage() {
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ section: "home", value: 0, suffix: "+", label: "", sublabel: "", active: true });
  const [loading, setLoading] = useState(false);

  async function load() {
    const res = await fetch("/api/admin/stats");
    setItems(await res.json());
  }
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  function openAdd() { setEditing(null); setForm({ section: "home", value: 0, suffix: "+", label: "", sublabel: "", active: true }); setModal(true); }
  function openEdit(item) { setEditing(item); setForm({ section: item.section, value: item.value, suffix: item.suffix, label: item.label, sublabel: item.sublabel ?? "", active: item.active }); setModal(true); }

  async function save() {
    if (!form.label) return alert("Label required");
    setLoading(true);
    if (editing) {
      await fetch(`/api/admin/stats/${editing.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } else {
      await fetch("/api/admin/stats", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    }
    setLoading(false); setModal(false); load();
  }

  async function remove(id) {
    if (!confirm("Delete?")) return;
    await fetch(`/api/admin/stats/${id}`, { method: "DELETE" });
    load();
  }

  const grouped = SECTIONS.map((s) => ({ ...s, items: items.filter((i) => i.section === s.value) }));

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">Stats & Counters</h1>
          <p className="text-gray-400 text-sm mt-0.5">Animated number counters on Home and About pages.</p>
        </div>
        <button onClick={openAdd} className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-lg">+ Add Stat</button>
      </div>

      {grouped.map((group) => (
        <div key={group.value} className="mb-8">
          <h2 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />{group.label}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {group.items.map((item) => (
              <div key={item.id} className={`bg-gray-800 border border-gray-700 rounded-xl p-4 ${!item.active ? "opacity-50" : ""}`}>
                <p className="text-2xl font-bold text-amber-400">{item.value}{item.suffix}</p>
                <p className="text-white text-xs font-medium mt-1">{item.label}</p>
                {item.sublabel && <p className="text-gray-500 text-[10px] mt-0.5">{item.sublabel}</p>}
                <div className="flex gap-2 mt-3">
                  <button onClick={() => openEdit(item)} className="text-[10px] text-gray-400 hover:text-white">Edit</button>
                  <button onClick={() => remove(item.id)} className="text-[10px] text-red-400 hover:text-red-300">Delete</button>
                </div>
              </div>
            ))}
            {group.items.length === 0 && <p className="text-gray-600 text-xs col-span-4">None yet.</p>}
          </div>
        </div>
      ))}

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? "Edit Stat" : "Add Stat"}>
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Section *</label>
            <select value={form.section} onChange={(e) => setForm({ ...form, section: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm">
              {SECTIONS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Number *</label>
              <input type="number" value={form.value} onChange={(e) => setForm({ ...form, value: +e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Suffix</label>
              <input value={form.suffix} onChange={(e) => setForm({ ...form, suffix: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="+" />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Label *</label>
            <input value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="e.g. Events Executed" />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Sub-label</label>
            <input value={form.sublabel} onChange={(e) => setForm({ ...form, sublabel: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm" placeholder="e.g. pan India & international" />
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} className="accent-amber-500" />
            <span className="text-sm text-gray-300">Active</span>
          </label>
          <button onClick={save} disabled={loading} className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold py-2.5 rounded-lg text-sm">
            {loading ? "Saving…" : editing ? "Update" : "Add Stat"}
          </button>
        </div>
      </Modal>
    </div>
  );
}
