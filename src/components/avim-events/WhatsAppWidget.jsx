"use client";

import { useState } from "react";

export default function WhatsAppWidget({ phone = "918951097078" }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const waNumber = phone.replace(/\D/g, "");

  function sendMessage() {
    const encoded = encodeURIComponent(
      message.trim() || "Hi AVIM Events…"
    );
    window.open(`https://wa.me/${waNumber}?text=${encoded}`, "_blank", "noopener,noreferrer");
    setOpen(false);
    setMessage("");
  }

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      {open && (
        <div
          className="glass-card-gv w-[min(288px,calc(100vw-2rem))] p-4 max-h-[calc(100vh-8rem)] overflow-y-auto"
          style={{ animation: "heroLineReveal 240ms cubic-bezier(.2,.8,.2,1) forwards" }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span className="text-white font-inter text-sm font-semibold">AVIM Events</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/40 hover:text-white text-lg leading-none transition-colors"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <p className="text-white/50 font-inter text-xs mb-3 leading-relaxed">
            Hi! Chat with us on WhatsApp for quick enquiries.
          </p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hi AVIM Events…"
            rows={3}
            className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder:text-white/25 font-inter text-sm resize-none focus:outline-none focus:border-gv-gold/40 transition-colors mb-3"
          />
          <button
            onClick={sendMessage}
            className="gold-btn w-full py-2.5 text-xs text-center"
          >
            Send on WhatsApp
          </button>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open WhatsApp chat"
        className="flex items-center gap-2 bg-[#25D366] text-white rounded-full px-4 py-3 shadow-lg hover:scale-105 transition-transform font-inter text-sm font-semibold"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </button>
    </div>
  );
}
