"use client";

import { useState } from "react";

export default function ContactSection({ config = {} }) {
  const address = config.address || "11-B, 2nd Cross, Shampura Main Rd, RT Nagar Post, Kaval Bairasandra, Bengaluru, Karnataka 560032";
  const phone1 = config.phone_1 || "+91 89510 97078";
  const phone2 = config.phone_2 || "+91 89517 97078";
  const email = config.email || "info@avim-events.com";
  const waPhone = (config.whatsapp_number || phone1).replace(/\D/g, "");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    await fetch("/api/public/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

      {/* Left — Form */}
      <div className="lg:col-span-7">
        <div className="glass-card-gv p-8 sm:p-12">
          <h2 className="font-fraunces text-2xl sm:text-3xl text-white mb-2">
            Send an Enquiry
          </h2>
          <p className="font-inter text-sm text-white/45 mb-8">
            A minimal, private, and fast way to reach our team.
          </p>

          {submitted ? (
            <div className="text-center py-10">
              <span className="font-fraunces text-3xl text-gradient-gold block mb-4">Thank you.</span>
              <p className="font-inter text-white/60 text-sm mb-6">
                We&apos;ll be in touch. Or email us directly at{" "}
                <a href={`mailto:${email}`} className="text-gv-gold underline underline-offset-2">
                  {email}
                </a>
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", phone: "", eventType: "", eventDate: "", message: "" });
                }}
                className="ghost-btn px-6 py-2.5 text-xs"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 font-inter text-sm focus:outline-none focus:border-gv-gold/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 font-inter text-sm focus:outline-none focus:border-gv-gold/50 transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 font-inter text-sm focus:outline-none focus:border-gv-gold/50 transition-colors"
                />
                <select
                  value={form.eventType}
                  onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white font-inter text-sm focus:outline-none focus:border-gv-gold/50 transition-colors appearance-none"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                >
                  <option value="" disabled className="bg-[#0A0A0C]">Event Type</option>
                  <option value="wedding" className="bg-[#0A0A0C]">Wedding</option>
                  <option value="corporate" className="bg-[#0A0A0C]">Corporate Event</option>
                  <option value="social" className="bg-[#0A0A0C]">Social Celebration</option>
                  <option value="tours" className="bg-[#0A0A0C]">Tours & Travel</option>
                  <option value="other" className="bg-[#0A0A0C]">Other</option>
                </select>
              </div>
              <input
                type="date"
                value={form.eventDate}
                onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white/70 font-inter text-sm focus:outline-none focus:border-gv-gold/50 transition-colors"
              />
              <textarea
                placeholder="Share your vision for the event…"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 font-inter text-sm focus:outline-none focus:border-gv-gold/50 transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={submitting}
                className="gold-btn glow-pulse w-full py-3.5 text-center text-sm disabled:opacity-50"
              >
                {submitting ? "Submitting…" : "Submit Enquiry"}
              </button>
              <p className="text-white/25 font-inter text-[11px] text-center">
                By submitting, you consent to be contacted about your event enquiry.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Right — Contact info + WhatsApp */}
      <div className="lg:col-span-5 space-y-6">
        <div className="glass-card-gv p-8">
          <h3 className="font-fraunces text-xl text-white mb-6">Contact Details</h3>
          <div className="space-y-6 font-inter text-sm">
            <div>
              <span className="text-gv-gold text-[9px] tracking-[0.25em] uppercase font-semibold block mb-1">Address</span>
              <p className="text-white/55 leading-relaxed text-xs">{address}</p>
            </div>
            <div className="h-px bg-gv-gold/10" />
            <div>
              <span className="text-gv-gold text-[9px] tracking-[0.25em] uppercase font-semibold block mb-1">Email</span>
              <a href={`mailto:${email}`} className="text-white/55 hover:text-gv-gold transition-colors">
                {email}
              </a>
            </div>
            <div className="h-px bg-gv-gold/10" />
            <div>
              <span className="text-gv-gold text-[9px] tracking-[0.25em] uppercase font-semibold block mb-1">Phone</span>
              <div className="space-y-1 text-white/55 text-xs">
                <a href={`tel:${phone1.replace(/\s/g, "")}`} className="block hover:text-gv-gold transition-colors">
                  {phone1}
                </a>
                {phone2 && (
                  <a href={`tel:${phone2.replace(/\s/g, "")}`} className="block hover:text-gv-gold transition-colors">
                    {phone2}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className="glass-card-gv p-8 text-center"
          style={{ border: "1px solid rgba(37,211,102,0.2)" }}
        >
          <h4 className="font-fraunces text-lg text-white mb-2">Instant Assistance</h4>
          <p className="font-inter text-sm text-white/45 mb-6 leading-relaxed">
            Prefer to message? Connect directly on WhatsApp for immediate responses.
          </p>
          <a
            href={`https://wa.me/${waPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-inter text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #25D366, #128C7E)",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(37,211,102,0.25)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
