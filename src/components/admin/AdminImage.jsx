"use client";
import { useState, useEffect } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";

export default function AdminImage({ src, alt, className }) {
  const [error, setError] = useState(false);

  // Reset error state if src changes
  useEffect(() => {
    setError(false);
  }, [src]);

  if (!src || error) {
    return (
      <div className={`bg-[#0a0a0a] flex flex-col items-center justify-center border border-gray-800/60 text-gray-600 overflow-hidden ${className}`}>
        <HiOutlinePhotograph className="w-1/3 h-1/3 min-w-[16px] min-h-[16px] max-w-[24px] max-h-[24px] opacity-40" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}
