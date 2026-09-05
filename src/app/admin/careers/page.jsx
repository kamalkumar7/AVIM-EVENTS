"use client";
import { useState, useEffect } from "react";
import ImageUpload from "@/components/admin/ImageUpload";

export default function CareersAdminPage() {
  const [data, setData] = useState({});
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const [initialLoad, setInitialLoad] = useState(true);

  async function load() {
    const res = await fetch("/api/admin/config?section=careers_section");
    const configs = await res.json();
    const map = {};
    configs.forEach((c) => { map[c.key] = c.value; });
    setData(map);
    setInitialLoad(false);
  }

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  function get(key) { return data[key] ?? ""; }
  function set(key, value) { setData((p) => ({ ...p, [key]: value })); }

  async function save() {
    const fields = ["label", "heading", "body_1", "body_2", "quote", "job_roles", "careers_email", "photo_url"];
    const items = fields.map((k) => ({ section: "careers_section", key: k, value: get(k) }));
    setSaving(true);
    await fetch("/api/admin/config", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(items) });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-white">Careers Section</h1>
        <p className="text-gray-400 text-sm mt-0.5">Edit the Careers section content and job roles list.</p>
      </div>

      {initialLoad ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 space-y-5">
          <div>
            <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Section Label</label>
            <input value={get("label")} onChange={(e) => set("label", e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500" />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Heading</label>
            <input value={get("heading")} onChange={(e) => set("heading", e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500" />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Body Paragraph 1</label>
            <textarea value={get("body_1")} onChange={(e) => set("body_1", e.target.value)} rows={3} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm resize-none focus:outline-none focus:border-amber-500" />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Body Paragraph 2</label>
            <textarea value={get("body_2")} onChange={(e) => set("body_2", e.target.value)} rows={3} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm resize-none focus:outline-none focus:border-amber-500" />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Quote</label>
            <input value={get("quote")} onChange={(e) => set("quote", e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500" />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Job Roles (one per line)</label>
            <textarea value={get("job_roles")} onChange={(e) => set("job_roles", e.target.value)} rows={6} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm resize-none focus:outline-none focus:border-amber-500 font-mono" placeholder={"Hospitality Executive\nGuest Coordination Lead\nLogistics Operations"} />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">Careers Email</label>
            <input value={get("careers_email")} onChange={(e) => set("careers_email", e.target.value)} type="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500" placeholder="careers@avim-eventsgroup.com" />
          </div>
          <ImageUpload label="Section Photo" folder="avim-events/careers" value={get("photo_url")} onChange={(url) => set("photo_url", url)} />

          <div className="flex items-center gap-3 pt-2">
            <button onClick={save} disabled={saving} className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold px-6 py-2.5 rounded-lg text-sm">
              {saving ? "Saving…" : saved ? "✓ Saved!" : "Save Changes"}
            </button>
            {saved && <p className="text-green-400 text-xs">Saved.</p>}
          </div>
        </div>
      )}
    </div>
  );
}
