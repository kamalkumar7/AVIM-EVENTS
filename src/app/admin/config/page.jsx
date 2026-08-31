"use client";
import { useState, useEffect, useRef } from "react";
import {
  HiOutlineCog,
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlineSearch,
  HiOutlineGlobe,
  HiOutlineMenu,
  HiOutlineReply,
  HiOutlinePhotograph,
  HiOutlineInformationCircle,
  HiOutlineSparkles,
  HiOutlineViewGrid,
  HiOutlineLink,
  HiOutlineOfficeBuilding,
  HiOutlineChartBar,
  HiOutlineChatAlt2,
  HiOutlineCollection,
  HiOutlinePlay,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiOutlineTrendingUp,
  HiOutlineAdjustments,
  HiOutlineColorSwatch,
  HiOutlineAcademicCap,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineChevronDown,
  HiOutlineChevronRight,
  HiOutlineSave,
  HiOutlineX,
} from "react-icons/hi";

// ─── Sections grouped by page, in the order they appear on each page ─────────
const SECTION_GROUPS = [
  {
    group: "Global",
    Icon: HiOutlineCog,
    description: "Settings that apply across the entire site",
    sections: [
      {
        id: "site_meta",
        label: "SEO & Meta",
        Icon: HiOutlineGlobe,
        fields: [
          { key: "site_title", label: "Site Title", type: "text" },
          { key: "meta_description", label: "Meta Description", type: "textarea" },
        ],
      },
      {
        id: "navbar",
        label: "Navigation Bar",
        Icon: HiOutlineMenu,
        fields: [
          { key: "logo_tagline", label: "Logo Tagline", type: "text" },
          { key: "cta_text", label: "CTA Button Text", type: "text" },
          { key: "whatsapp_number", label: "WhatsApp Number", type: "text" },
        ],
      },
      {
        id: "footer",
        label: "Footer",
        Icon: HiOutlineReply,
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
    ],
  },
  {
    group: "Homepage",
    Icon: HiOutlineHome,
    description: "Hero, about preview, features, services, CTA, and more",
    sections: [
      {
        id: "hero_section",
        label: "Hero Banner",
        Icon: HiOutlinePhotograph,
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
        id: "home_about",
        label: "About Preview",
        Icon: HiOutlineInformationCircle,
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
        label: "Feature Tiles",
        Icon: HiOutlineSparkles,
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
        label: "Services Header",
        Icon: HiOutlineViewGrid,
        fields: [
          { key: "label", label: "Section Label", type: "text" },
          { key: "heading", label: "Heading", type: "text" },
          { key: "view_all_link", label: "View All Link Text", type: "text" },
        ],
      },
      {
        id: "tieup_section",
        label: "Tieups / Partners",
        Icon: HiOutlineLink,
        fields: [
          { key: "heading", label: "Section Heading", type: "text" },
          { key: "subtitle", label: "Subtitle", type: "textarea" },
        ],
      },
      {
        id: "properties_section",
        label: "Properties",
        Icon: HiOutlineOfficeBuilding,
        fields: [
          { key: "heading", label: "Heading", type: "text" },
          { key: "subtitle", label: "Subtitle", type: "textarea" },
        ],
      },
      {
        id: "counters_section",
        label: "Stats / Counters",
        Icon: HiOutlineChartBar,
        fields: [
          { key: "label", label: "Section Label", type: "text" },
          { key: "heading", label: "Heading", type: "text" },
        ],
      },
      {
        id: "testimonials_section",
        label: "Testimonials",
        Icon: HiOutlineChatAlt2,
        fields: [
          { key: "label", label: "Section Label", type: "text" },
          { key: "heading", label: "Heading", type: "text" },
        ],
      },
      {
        id: "portfolio_section",
        label: "Portfolio",
        Icon: HiOutlineCollection,
        fields: [
          { key: "label", label: "Section Label", type: "text" },
          { key: "heading", label: "Heading", type: "text" },
          { key: "subtitle", label: "Subtitle", type: "textarea" },
        ],
      },
      {
        id: "home_cta",
        label: "CTA Banner",
        Icon: HiOutlinePlay,
        fields: [
          { key: "heading", label: "Heading", type: "text" },
          { key: "body", label: "Body Text", type: "textarea" },
          { key: "btn_text", label: "Button Text", type: "text" },
        ],
      },
    ],
  },
  {
    group: "About Page",
    Icon: HiOutlineUserCircle,
    description: "Leadership, team, stats, and milestones",
    sections: [
      {
        id: "about_hero",
        label: "Hero Section",
        Icon: HiOutlinePhotograph,
        fields: [
          { key: "label", label: "Section Label", type: "text" },
          { key: "heading", label: "Heading", type: "text" },
          { key: "body", label: "Body", type: "textarea" },
        ],
      },
      {
        id: "about_leadership",
        label: "Leadership",
        Icon: HiOutlineStar,
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
        label: "Team Heading",
        Icon: HiOutlineUserGroup,
        fields: [
          { key: "label", label: "Section Label", type: "text" },
          { key: "heading", label: "Heading", type: "text" },
          { key: "subtitle", label: "Subtitle", type: "textarea" },
        ],
      },
      {
        id: "about_stats",
        label: "Stats & Milestones",
        Icon: HiOutlineTrendingUp,
        fields: [
          { key: "label", label: "Section Label", type: "text" },
          { key: "heading", label: "Heading", type: "text" },
          { key: "milestones_label", label: "Milestones Label", type: "text" },
          { key: "milestones_heading", label: "Milestones Heading", type: "text" },
          { key: "milestones_subtitle", label: "Milestones Subtitle", type: "textarea" },
        ],
      },
    ],
  },
  {
    group: "Services Page",
    Icon: HiOutlineBriefcase,
    description: "Service page hero, parallax, extra services, and proposal CTA",
    sections: [
      {
        id: "services_hero",
        label: "Hero Section",
        Icon: HiOutlinePhotograph,
        fields: [
          { key: "label", label: "Section Label", type: "text" },
          { key: "heading", label: "Heading", type: "text" },
          { key: "body", label: "Body", type: "textarea" },
        ],
      },
      {
        id: "services_parallax",
        label: "Parallax Banner",
        Icon: HiOutlineAdjustments,
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
        label: "More Services",
        Icon: HiOutlineColorSwatch,
        fields: [
          { key: "label", label: "Section Label", type: "text" },
          { key: "heading", label: "Heading", type: "text" },
        ],
      },
      {
        id: "services_cta",
        label: "Proposal CTA",
        Icon: HiOutlinePlay,
        fields: [
          { key: "label", label: "Label", type: "text" },
          { key: "heading", label: "Heading", type: "text" },
          { key: "body", label: "Body", type: "textarea" },
          { key: "btn_text", label: "Button Text", type: "text" },
        ],
      },
    ],
  },
  {
    group: "Other Pages",
    Icon: HiOutlineDocumentText,
    description: "Careers, contact, blogs, and venues",
    sections: [
      {
        id: "careers_section",
        label: "Careers",
        Icon: HiOutlineAcademicCap,
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
        label: "Contact",
        Icon: HiOutlinePhone,
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
        id: "blog_page",
        label: "Blog",
        Icon: HiOutlineDocumentText,
        fields: [
          { key: "heading", label: "Heading", type: "text" },
          { key: "subheading", label: "Subheading", type: "textarea" },
          { key: "coming_soon_label", label: "Coming Soon Label", type: "text" },
        ],
      },
      {
        id: "venues_page",
        label: "Venues",
        Icon: HiOutlineLocationMarker,
        fields: [
          { key: "heading", label: "Heading", type: "text" },
          { key: "body", label: "Body", type: "textarea" },
          { key: "palatial_heading", label: "Palatial Section Heading", type: "text" },
          { key: "palatial_subtitle", label: "Palatial Section Subtitle", type: "text" },
          { key: "elite_heading", label: "Elite Section Heading", type: "text" },
          { key: "elite_subtitle", label: "Elite Section Subtitle", type: "text" },
        ],
      },
    ],
  },
];

// Flatten for lookups
const ALL_SECTIONS = SECTION_GROUPS.flatMap((g) => g.sections);

export default function ConfigPage() {
  const [data, setData] = useState({});
  const [originalData, setOriginalData] = useState({});
  const [saving, setSaving] = useState({});
  const [saved, setSaved] = useState({});
  const [activeTab, setActiveTab] = useState(ALL_SECTIONS[0].id);
  const [expandedGroups, setExpandedGroups] = useState(
    () => Object.fromEntries(SECTION_GROUPS.map((g) => [g.group, true]))
  );
  const [searchQuery, setSearchQuery] = useState("");
  const editorRef = useRef(null);

  async function load() {
    const res = await fetch("/api/admin/config");
    const configs = await res.json();
    const map = {};
    configs.forEach((c) => {
      if (!map[c.section]) map[c.section] = {};
      map[c.section][c.key] = c.value;
    });
    setData(map);
    setOriginalData(JSON.parse(JSON.stringify(map)));
  }

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  function getValue(section, key) {
    return data[section]?.[key] ?? "";
  }

  function setValue(section, key, value) {
    setData((prev) => ({ ...prev, [section]: { ...(prev[section] || {}), [key]: value } }));
  }

  function hasUnsavedChanges(sectionId) {
    const section = ALL_SECTIONS.find((s) => s.id === sectionId);
    if (!section) return false;
    return section.fields.some((f) => {
      const current = data[sectionId]?.[f.key] ?? "";
      const original = originalData[sectionId]?.[f.key] ?? "";
      return current !== original;
    });
  }

  async function saveSection(sectionId) {
    const section = ALL_SECTIONS.find((s) => s.id === sectionId);
    const items = section.fields.map((f) => ({ section: sectionId, key: f.key, value: getValue(sectionId, f.key) }));
    setSaving((p) => ({ ...p, [sectionId]: true }));
    await fetch("/api/admin/config", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(items) });
    setSaving((p) => ({ ...p, [sectionId]: false }));
    setSaved((p) => ({ ...p, [sectionId]: true }));
    setOriginalData((prev) => ({
      ...prev,
      [sectionId]: { ...(data[sectionId] || {}) },
    }));
    setTimeout(() => setSaved((p) => ({ ...p, [sectionId]: false })), 2500);
  }

  function toggleGroup(groupName) {
    setExpandedGroups((prev) => ({ ...prev, [groupName]: !prev[groupName] }));
  }

  const activeSection = ALL_SECTIONS.find((s) => s.id === activeTab);
  const activeGroup = SECTION_GROUPS.find((g) => g.sections.some((s) => s.id === activeTab));

  // Filter sections by search
  const filteredGroups = searchQuery.trim()
    ? SECTION_GROUPS.map((g) => ({
        ...g,
        sections: g.sections.filter((s) =>
          s.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.fields.some((f) => f.label.toLowerCase().includes(searchQuery.toLowerCase()))
        ),
      })).filter((g) => g.sections.length > 0)
    : SECTION_GROUPS;

  return (
    <div className="p-6 lg:p-8 max-w-7xl">
      {/* Page header */}
      <div className="mb-6">
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
          <span>Admin</span>
          <span className="text-gray-300">/</span>
          <span className="text-gray-600">Site Text</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Site Text Editor</h1>
        <p className="text-gray-500 text-sm mt-1">
          Edit all text content across every page. Sections are organized by page for easy navigation.
        </p>
      </div>

      <div className="flex gap-6">
        {/* ── Left sidebar: grouped navigation ── */}
        <div className="w-60 shrink-0">
          {/* Search */}
          <div className="mb-3">
            <div className="relative">
              <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sections…"
                className="w-full bg-white border border-gray-200 rounded-lg pl-8 pr-3 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-all"
              />
            </div>
          </div>

          {/* Grouped nav */}
          <nav className="space-y-0.5 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 admin-scrollbar">
            {filteredGroups.map((group) => {
              const GroupIcon = group.Icon;
              return (
                <div key={group.group}>
                  {/* Group header */}
                  <button
                    onClick={() => toggleGroup(group.group)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-[11px] font-medium uppercase tracking-wider text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <GroupIcon size={13} />
                      {group.group}
                    </span>
                    {expandedGroups[group.group]
                      ? <HiOutlineChevronDown size={12} className="text-gray-300" />
                      : <HiOutlineChevronRight size={12} className="text-gray-300" />
                    }
                  </button>

                  {/* Sections within group */}
                  {expandedGroups[group.group] && (
                    <div className="ml-3 border-l border-gray-200 pl-1 mb-2 space-y-0.5">
                      {group.sections.map((s) => {
                        const isActive = activeTab === s.id;
                        const unsaved = hasUnsavedChanges(s.id);
                        const SectionIcon = s.Icon;
                        return (
                          <button
                            key={s.id}
                            onClick={() => {
                              setActiveTab(s.id);
                              editorRef.current?.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all duration-150 flex items-center justify-between group ${
                              isActive
                                ? "bg-gray-900 text-white shadow-sm"
                                : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                            }`}
                          >
                            <span className="flex items-center gap-2 min-w-0">
                              <SectionIcon size={13} className={`shrink-0 ${isActive ? "text-gray-400" : "text-gray-300"}`} />
                              <span className="truncate">{s.label}</span>
                            </span>
                            <span className="flex items-center gap-1 shrink-0">
                              {unsaved && (
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" title="Unsaved changes" />
                              )}
                              {saved[s.id] && (
                                <span className="text-emerald-500 text-[10px] font-medium">Saved</span>
                              )}
                              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                isActive ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-400 group-hover:text-gray-500"
                              }`}>
                                {s.fields.length}
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* ── Right panel: field editor ── */}
        {activeSection && (
          <div className="flex-1 min-w-0" ref={editorRef}>
            {/* Section header card */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-1">
                    {activeGroup && <activeGroup.Icon size={12} />}
                    <span>{activeGroup?.group}</span>
                    <HiOutlineChevronRight size={10} className="text-gray-300" />
                    <span className="text-gray-600">{activeSection.label}</span>
                  </div>
                  <h2 className="text-lg text-gray-900 font-semibold flex items-center gap-2">
                    <activeSection.Icon size={18} className="text-gray-400" />
                    {activeSection.label}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  {hasUnsavedChanges(activeSection.id) && (
                    <span className="text-[11px] text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-2.5 py-1 font-medium">
                      Unsaved
                    </span>
                  )}
                  <span className="text-[11px] text-gray-400 bg-gray-50 border border-gray-200 rounded-full px-2.5 py-1">
                    {activeSection.fields.length} field{activeSection.fields.length !== 1 ? "s" : ""}
                  </span>
                </div>
              </div>
            </div>

            {/* Fields */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-5">
              {activeSection.fields.map((field) => (
                <div key={field.key} className="group">
                  <label className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">{field.label}</span>
                    <span className="text-[10px] text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                      {activeSection.id}.{field.key}
                    </span>
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      value={getValue(activeSection.id, field.key)}
                      onChange={(e) => setValue(activeSection.id, field.key, e.target.value)}
                      rows={3}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-gray-800 text-sm resize-y focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 focus:bg-white transition-all placeholder-gray-400"
                      placeholder={`Enter ${field.label.toLowerCase()}…`}
                    />
                  ) : (
                    <input
                      type="text"
                      value={getValue(activeSection.id, field.key)}
                      onChange={(e) => setValue(activeSection.id, field.key, e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 focus:bg-white transition-all placeholder-gray-400"
                      placeholder={`Enter ${field.label.toLowerCase()}…`}
                    />
                  )}
                </div>
              ))}

              {/* Save bar */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => saveSection(activeSection.id)}
                    disabled={saving[activeSection.id] || !hasUnsavedChanges(activeSection.id)}
                    className={`font-medium px-5 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
                      hasUnsavedChanges(activeSection.id)
                        ? "bg-gray-900 hover:bg-gray-800 text-white shadow-sm"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    } disabled:opacity-50`}
                  >
                    {saving[activeSection.id] ? (
                      <>
                        <span className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Saving…
                      </>
                    ) : saved[activeSection.id] ? (
                      <>
                        <HiOutlineSave size={14} />
                        Saved!
                      </>
                    ) : (
                      <>
                        <HiOutlineSave size={14} />
                        Save Changes
                      </>
                    )}
                  </button>
                  {saved[activeSection.id] && (
                    <p className="text-emerald-600 text-xs font-medium admin-fade-in">Changes saved successfully.</p>
                  )}
                </div>
                {hasUnsavedChanges(activeSection.id) && (
                  <button
                    onClick={() => {
                      setData((prev) => ({
                        ...prev,
                        [activeSection.id]: { ...(originalData[activeSection.id] || {}) },
                      }));
                    }}
                    className="text-xs text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1"
                  >
                    <HiOutlineX size={12} />
                    Discard
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Utility styles */}
      <style jsx>{`
        .admin-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .admin-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .admin-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.08);
          border-radius: 4px;
        }
        .admin-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0,0,0,0.15);
        }
        @keyframes adminFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .admin-fade-in {
          animation: adminFadeIn 300ms ease-out;
        }
      `}</style>
    </div>
  );
}
