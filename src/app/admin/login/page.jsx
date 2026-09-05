"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push(params.get("from") || "/admin");
    } else {
      const d = await res.json();
      setError(d.error || "Login failed");
    }
  }

  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-sm relative z-10">
        <div className="text-center mb-10">
          <img
            src="/images/avim-events/logos/main-logo.png"
            alt="AVIM Events"
            className="h-24 w-auto mx-auto mb-4 hover:scale-105 transition-transform duration-500"
          />
          <p className="text-[#C9A227] tracking-widest text-xs uppercase font-medium font-body-rt">Admin Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel p-8 space-y-6">
          <h1 className="text-white font-semibold text-xl text-center font-display-lg tracking-wide">Sign in</h1>

          {error && <p className="text-red-300 text-sm text-center bg-red-900/30 border border-red-500/30 rounded-lg px-3 py-2">{error}</p>}

          <div className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoFocus
                className="w-full bg-black/40 border border-[#C9A227]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A227] focus:bg-black/60 transition-all shadow-inner"
                placeholder="admin@avimevents"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-black/40 border border-[#C9A227]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A227] focus:bg-black/60 transition-all shadow-inner"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full gold-btn py-3 mt-4"
          >
            {loading ? "Authenticating…" : "Enter Portal"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
