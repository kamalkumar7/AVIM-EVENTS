"use client";

import { useState } from "react";

const DEFAULT_JOB_ROLES = [
  "Hospitality Executive",
  "Guest Coordination Lead",
  "Logistics Operations",
  "Wedding / Events Executive",
  "Field Supervisor",
  "Guest Relations / Concierge",
  "Operations Coordinator",
  "Event Logistics Coordinator",
  "Other",
];

const BENEFITS = [
  "Growth Opportunities with Real Responsibility and Mentorship.",
  "Leadership Exposure on Premium, High-Pressure Projects.",
  "Luxury Event Industry Experience that elevates your Profile.",
  "Pan-India Operations across Cities, Venues, and Destination Events.",
];

export default function CareersSection({ config = {} }) {
  const jobRoles = config.job_roles
    ? config.job_roles.split("\n").filter(Boolean)
    : DEFAULT_JOB_ROLES;
  const careersEmail = config.careers_email || "careers@avim-eventsgroup.com";
  const photoUrl = config.photo_url || "/images/avim-events/careers/career-1.jpg";

  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    await fetch("/api/public/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <section className="py-20 sm:py-28 section-theme-navy" id="careers">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left — Editorial copy */}
        <div className="reveal-left">
          <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">
            {config.label || "CAREERS"}
          </p>
          <h2 className="font-fraunces text-3xl sm:text-5xl text-white leading-tight mb-8">
            {config.heading || "Join the Legacy. Build the Future."}
          </h2>

          <p className="text-white/60 font-inter text-base leading-relaxed mb-5">
            {config.body_1 || "AVIM Events is where Luxury Hospitality meets Operational Excellence. If you're driven by detail, calm under Pressure, and obsessed with Premium Experiences — your next chapter starts here."}
          </p>
          <p className="text-white/60 font-inter text-base leading-relaxed mb-8">
            {config.body_2 || "Work Alongside teams that execute Royal Weddings, High-Profile Corporate Events, and large-scale Guest movement with Composure, Precision, and Class."}
          </p>

          <blockquote className="font-fraunces text-xl text-gradient-gold italic mb-10">
            &ldquo;{config.quote || "Where Hospitality Meets Opportunity."}&rdquo;
          </blockquote>

          <ul className="space-y-4 mb-10">
            {BENEFITS.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#D4AF37", boxShadow: "0 0 8px rgba(212,175,55,0.6)" }} />
                <span className="text-white/70 font-inter text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <p className="text-white/40 font-inter text-xs italic">
            We hire for Hospitality, Logistics Ops, Guest Coordination, Event Execution, and Field Leadership.
          </p>
        </div>

        {/* Right — Visual block + form */}
        <div className="reveal-right space-y-6">
          <div className="glass-card-gv relative overflow-hidden p-7">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)", filter: "blur(30px)" }} />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gv-gold font-inter text-[9px] tracking-[0.2em] uppercase font-semibold border border-gv-gold/30 rounded-full px-3 py-1">CAREERS AT AVIM EVENTS</span>
                <span className="text-white/30 font-inter text-[9px] tracking-[0.2em] uppercase">PREMIUM TEAM</span>
              </div>
              <h3 className="font-fraunces text-lg text-white/90 mb-2">SIGNATURE CULTURE</h3>
              <p className="font-fraunces text-xl text-white mb-4">Shape Experiences. <span className="text-gradient-gold">Elevate Standards.</span></p>
              <p className="text-white/50 font-inter text-sm leading-relaxed mb-6">A calm Luxury Surface — Powered by Sharp Systems, Disciplined Teams, and High-Touch Hospitality.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
                  <span className="text-gv-gold font-fraunces text-base block">LEARN</span>
                  <span className="text-white/40 font-inter text-xs">On ground — Real events. Real scale.</span>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
                  <span className="text-gv-gold font-fraunces text-base block">GROW</span>
                  <span className="text-white/40 font-inter text-xs">Fast — Luxury-level standards.</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden" style={{ height: "180px" }}>
                <img src={photoUrl} alt="AVIM Events team at a premium event" className="w-full h-full object-cover" loading="lazy" onError={(e) => { e.currentTarget.src = "/images/avim-events/placeholder-portfolio.svg"; }} />
              </div>
            </div>
            <div className="absolute bottom-4 right-4 w-10 h-10 border border-gv-gold/30 rounded-sm pointer-events-none" style={{ transform: "rotate(15deg)" }} />
            <div className="absolute top-14 right-6 w-6 h-6 border border-gv-gold/20 rounded-full pointer-events-none" />
          </div>

          {/* Application form */}
          <div className="glass-card-gv p-7">
            <h3 className="font-fraunces text-xl text-white mb-1">Apply in 60 seconds</h3>
            <p className="text-white/45 font-inter text-sm mb-6">A minimal application — premium, private, and fast.</p>

            {submitted ? (
              <div className="text-center py-8">
                <span className="text-gv-gold font-fraunces text-2xl block mb-3">Thank you.</span>
                <p className="text-white/60 font-inter text-sm">
                  We&apos;ll be in touch. Or email us at{" "}
                  <a href={`mailto:${careersEmail}`} className="text-gv-gold underline underline-offset-2">{careersEmail}</a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Full Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 font-inter text-sm focus:outline-none focus:border-gv-gold/50 transition-colors" />
                <input type="email" placeholder="Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 font-inter text-sm focus:outline-none focus:border-gv-gold/50 transition-colors" />
                <input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 font-inter text-sm focus:outline-none focus:border-gv-gold/50 transition-colors" />
                <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} required className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-gv-gold/50 transition-colors appearance-none" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                  <option value="" disabled className="bg-[#0A0A0C]">Job Role</option>
                  {jobRoles.map((r) => <option key={r} value={r} className="bg-[#0A0A0C]">{r}</option>)}
                </select>
                <button type="submit" disabled={submitting} className="gold-btn glow-pulse w-full py-3.5 text-center text-sm disabled:opacity-50">
                  {submitting ? "Submitting…" : "Submit Application"}
                </button>
                <p className="text-white/25 font-inter text-[11px] text-center">By applying, you consent to be contacted for recruitment purposes.</p>
              </form>
            )}

            <div className="border-t border-white/[0.06] mt-6 pt-5 text-center space-y-1">
              <p className="text-white/25 font-inter text-[10px] tracking-widest uppercase">Premium hiring • High standards • Calm execution</p>
              <p className="text-gv-gold font-inter text-[10px] tracking-[0.2em] uppercase font-semibold">AVIM EVENTS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
