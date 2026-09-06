export default function Loading() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#050505" }}
    >
      {/* Gold shimmer bar at top */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] z-[9999]"
        style={{
          background:
            "linear-gradient(to right, #B9922B, #D4AF37, #D8BC5A, #D4AF37, #B9922B)",
          animation: "loadingBar 1.2s ease-in-out infinite",
        }}
      />

      {/* Centered logo pulse */}
      <div className="flex flex-col items-center gap-6">
        <img
          src="/images/avim-events/logos/main-logo.png"
          alt="Loading..."
          className="h-12 w-auto"
          style={{
            filter: "drop-shadow(0 0 12px rgba(212,175,55,0.3))",
            animation: "logoPulse 1.8s ease-in-out infinite",
          }}
        />
        <div
          className="h-px w-20"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(212,175,55,0.5), transparent)",
          }}
        />
      </div>

      <style>{`
        @keyframes loadingBar {
          0% { transform: scaleX(0); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: left; }
          50.01% { transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
        @keyframes logoPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
