"use client";
import { useState, useEffect } from "react";

const SECTIONS = [
  {
    id: "navbar",
    label: "Navbar",
    fields: [
      { key: "logo_tagline", label: "Logo Tagline", type: "text" },
      { key: "cta_text", label: "CTA Button Text", type: "text" },
      { key: "whatsapp_number", label: "WhatsApp Number", type: "text" },
    ],
  },
  {
    id: "home_about",
    label: "Home – About Section",
    fields: [
      { key: "label", label: "Section Label", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "body", label: "Body Text", type: "textarea" },
      { key: "btn_primary", label: "Primary Button", type: "text" },
      { key: "btn_secondary", label: "Secondary Button", type: "text" },
    ],
  },
  {
    id: "home_features",
    label: "Home – Feature Tiles",
    fields: [
      { key: "tile1_icon", label: "Tile 1 Icon", type: "text" },
      { key: "tile1_title", label: "Tile 1 Title", type: "text" },
      { key: "tile1_desc", label: "Tile 1 Description", type: "textarea" },
      { key: "tile2_icon", label: "Tile 2 Icon", type: "text" },
      { key: "tile2_title", label: "Tile 2 Title", type: "text" },
      { key: "tile2_desc", label: "Tile 2 Description", type: "textarea" },
      { key: "tile3_icon", label: "Tile 3 Icon", type: "text" },
      { key: "tile3_title", label: "Tile 3 Title", type: "text" },
      { key: "tile3_desc", label: "Tile 3 Description", type: "textarea" },
    ],
  },
  {
    id: "home_services",
    label: "Home – Services Section Header",
    fields: [
      { key: "label", label: "Section Label", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "view_all_link", label: "View All Link Text", type: "text" },
    ],
  },
  {
    id: "home_cta",
    label: "Home – CTA Banner",
    fields: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "body", label: "Body Text", type: "textarea" },
      { key: "btn_text", label: "Button Text", type: "text" },
    ],
  },
  {
    id: "hero_section",
    label: "Hero – Glassmorphism Card",
    fields: [
      { key: "badge", label: "Top Badge", type: "text" },
      { key: "headline_1", label: "Headline Line 1", type: "text" },
      { key: "headline_2", label: "Headline Line 2", type: "text" },
      { key: "subtext", label: "Subtext", type: "textarea" },
      { key: "cta_primary", label: "Primary CTA", type: "text" },
      { key: "cta_secondary", label: "Secondary CTA", type: "text" },
      { key: "card_title", label: "Card Title", type: "text" },
      { key: "card_body", label: "Card Body", type: "textarea" },
    ],
  },
  {
    id: "tieup_section",
    label: "Tieups / Partners Section",
    fields: [
      { key: "heading", label: "Section Heading", type: "text" },
      { key: "subtitle", label: "Subtitle", type: "textarea" },
    ],
  },
  {
    id: "properties_section",
    label: "Properties Section",
    fields: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "subtitle", label: "Subtitle", type: "textarea" },
    ],
  },
  {
    id: "counters_section",
    label: "Counters Section",
    fields: [
      { key: "label", label: "Section Label", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
    ],
  },
  {
    id: "testimonials_section",
    label: "Testimonials Section",
    fields: [
      { key: "label", label: "Section Label", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
    ],
  },
  {
    id: "portfolio_section",
    label: "Portfolio Section",
    fields: [
      { key: "label", label: "Section Label", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "subtitle", label: "Subtitle", type: "textarea" },
    ],
  },
  {
    id: "about_hero",
    label: "About – Hero",
    fields: [
      { key: "label", label: "Section Label", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "body", label: "Body", type: "textarea" },
    ],
  },
  {
    id: "about_leadership",
    label: "About – Leadership",
    fields: [
      { key: "label", label: "Section Label", type: "text" },
      { key: "name", label: "Name", type: "text" },
      { key: "title", label: "Title", type: "text" },
      { key: "body", label: "Bio", type: "textarea" },
      { key: "vision_label", label: "Vision Label", type: "text" },
      { key: "vision_quote", label: "Vision Quote", type: "textarea" },
      { key: "photo_url", label: "Photo URL", type: "text" },
    ],
  },
  {
    id: "about_team",
    label: "About – Team Heading",
    fields: [
      { key: "label", label: "Section Label", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "subtitle", label: "Subtitle", type: "textarea" },
    ],
  },
  {
    id: "about_stats",
    label: "About – Stats Section",
    fields: [
      { key: "label", label: "Section Label", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "milestones_label", label: "Milestones Label", type: "text" },
      { key: "milestones_heading", label: "Milestones Heading", type: "text" },
      { key: "milestones_subtitle", label: "Milestones Subtitle", type: "textarea" },
    ],
  },
  {
    id: "services_hero",
    label: "Services – Hero",
    fields: [
      { key: "label", label: "Section Label", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "body", label: "Body", type: "textarea" },
    ],
  },
  {
    id: "services_parallax",
    label: "Services – Parallax Banner",
    fields: [
      { key: "label", label: "Label", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "body", label: "Body", type: "textarea" },
      { key: "btn_primary", label: "Primary Button", type: "text" },
      { key: "btn_secondary", label: "Secondary Button", type: "text" },
    ],
  },
  {
    id: "services_more",
    label: "Services – More Services Section",
    fields: [
      { key: "label", label: "Section Label", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
    ],
  },
  {
    id: "services_cta",
    label: "Services – Proposal CTA",
    fields: [
      { key: "label", label: "Label", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "body", label: "Body", type: "textarea" },
      { key: "btn_text", label: "Button Text", type: "text" },
    ],
  },
  {
    id: "careers_section",
    label: "Careers Section",
    fields: [
      { key: "label", label: "Section Label", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "body_1", label: "Body Paragraph 1", type: "textarea" },
      { key: "body_2", label: "Body Paragraph 2", type: "textarea" },
      { key: "quote", label: "Quote", type: "text" },
      { key: "job_roles", label: "Job Roles (one per line)", type: "textarea" },
      { key: "careers_email", label: "Careers Email", type: "text" },
      { key: "photo_url", label: "Section Photo URL", type: "text" },
    ],
  },
  {
    id: "contact_info",
    label: "Contact Info",
    fields: [
      { key: "heading", label: "Page Heading", type: "text" },
      { key: "subheading", label: "Subheading", type: "textarea" },
      { key: "address", label: "Address", type: "textarea" },
      { key: "phone_1", label: "Phone 1", type: "text" },
      { key: "phone_2", label: "Phone 2", type: "text" },
      { key: "email", label: "Email", type: "text" },
      { key: "hours", label: "Hours", type: "text" },
      { key: "whatsapp_number", label: "WhatsApp Number", type: "text" },
    ],
  },
  {
    id: "gallery_page",
    label: "Gallery Page",
    fields: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "body", label: "Body", type: "textarea" },
    ],
  },
  {
    id: "venues_page",
    label: "Venues Page",
    fields: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "body", label: "Body", type: "textarea" },
      { key: "palatial_heading", label: "Palatial Section Heading", type: "text" },
      { key: "palatial_subtitle", label: "Palatial Section Subtitle", type: "text" },
      { key: "elite_heading", label: "Elite Section Heading", type: "text" },
      { key: "elite_subtitle", label: "Elite Section Subtitle", type: "text" },
    ],
  },
  {
    id: "footer",
    label: "Footer",
    fields: [
      { key: "tagline", label: "Brand Tagline", type: "textarea" },
      { key: "address", label: "Address", type: "textarea" },
      { key: "email", label: "Email", type: "text" },
      { key: "phone_1", label: "Phone 1", type: "text" },
      { key: "phone_2", label: "Phone 2", type: "text" },
      { key: "instagram_url", label: "Instagram URL", type: "text" },
      { key: "linkedin_url", label: "LinkedIn URL", type: "text" },
      { key: "facebook_url", label: "Facebook URL", type: "text" },
      { key: "copyright", label: "Copyright Text", type: "text" },
    ],
  },
  {
    id: "site_meta",
    label: "Site Meta / SEO",
    fields: [
      { key: "site_title", label: "Site Title", type: "text" },
      { key: "meta_description", label: "Meta Description", type: "textarea" },
    ],
  },
];

export default function ConfigPage() {
  const [data, setData] = useState({});
  const [saving, setSaving] = useState({});
  const [saved, setSaved] = useState({});
  const [activeTab, setActiveTab] = useState(SECTIONS[0].id);

  async function load() {
    const res = await fetch("/api/admin/config");
    const configs = await res.json();
    const map = {};
    configs.forEach((c) => {
      if (!map[c.section]) map[c.section] = {};
      map[c.section][c.key] = c.value;
    });
    setData(map);
  }

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  function getValue(section, key) {
    return data[section]?.[key] ?? "";
  }

  function setValue(section, key, value) {
    setData((prev) => ({ ...prev, [section]: { ...(prev[section] || {}), [key]: value } }));
  }

  async function saveSection(sectionId) {
    const section = SECTIONS.find((s) => s.id === sectionId);
    const items = section.fields.map((f) => ({ section: sectionId, key: f.key, value: getValue(sectionId, f.key) }));
    setSaving((p) => ({ ...p, [sectionId]: true }));
    await fetch("/api/admin/config", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(items) });
    setSaving((p) => ({ ...p, [sectionId]: false }));
    setSaved((p) => ({ ...p, [sectionId]: true }));
    setTimeout(() => setSaved((p) => ({ ...p, [sectionId]: false })), 2000);
  }

  const activeSection = SECTIONS.find((s) => s.id === activeTab);

  return (
    <div className="p-8 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-white">Site Text</h1>
        <p className="text-gray-400 text-sm mt-0.5">Edit all text content across the site. Select a section to edit.</p>
      </div>

      <div className="flex gap-6">
        {/* Section list */}
        <div className="w-52 shrink-0">
          <nav className="space-y-0.5">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${activeTab === s.id ? "bg-amber-500/15 text-amber-400" : "text-gray-400 hover:text-white hover:bg-gray-800"}`}
              >
                {s.label}
                {saved[s.id] && <span className="ml-1 text-green-400">✓</span>}
              </button>
            ))}
          </nav>
        </div>

        {/* Field editor */}
        {activeSection && (
          <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h2 className="text-white font-semibold mb-5">{activeSection.label}</h2>
            <div className="space-y-5">
              {activeSection.fields.map((field) => (
                <div key={field.key}>
                  <label className="block text-xs text-gray-400 mb-1.5 uppercase tracking-wider">{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      value={getValue(activeSection.id, field.key)}
                      onChange={(e) => setValue(activeSection.id, field.key, e.target.value)}
                      rows={3}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm resize-none focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  ) : (
                    <input
                      type="text"
                      value={getValue(activeSection.id, field.key)}
                      onChange={(e) => setValue(activeSection.id, field.key, e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => saveSection(activeSection.id)}
                disabled={saving[activeSection.id]}
                className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
              >
                {saving[activeSection.id] ? "Saving…" : saved[activeSection.id] ? "✓ Saved!" : "Save Changes"}
              </button>
              {saved[activeSection.id] && <p className="text-green-400 text-xs">Changes saved successfully.</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
