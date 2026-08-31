"use client";
import { useState, useRef } from "react";

export default function ImageUpload({ value, onChange, folder = "avim-events", label = "Image" }) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(value || "");
  const inputRef = useRef(null);

  async function handleFile(file) {
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("folder", folder);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const data = await res.json();
    setUploading(false);
    if (data.url) {
      setPreview(data.url);
      onChange(data.url);
    } else {
      alert("Upload failed: " + (data.error || "unknown error"));
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  }

  return (
    <div className="space-y-2">
      <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider">{label}</label>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="relative border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-amber-500 transition-colors bg-gray-800/50 overflow-hidden"
        style={{ minHeight: preview ? 180 : 100 }}
      >
        {preview ? (
          <img src={preview} alt="preview" className="w-full h-44 object-cover" />
        ) : (
          <div className="flex flex-col items-center justify-center h-24 gap-2 text-gray-500">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs">Drag & drop or click to upload</span>
          </div>
        )}
        {uploading && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="text-amber-400 text-sm animate-pulse">Uploading…</span>
          </div>
        )}
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => handleFile(e.target.files[0])} />
      </div>
      {preview && (
        <div className="flex gap-2 items-center">
          <input value={preview} onChange={(e) => { setPreview(e.target.value); onChange(e.target.value); }} className="flex-1 bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300" placeholder="or paste URL" />
          <button type="button" onClick={() => { setPreview(""); onChange(""); }} className="text-xs text-red-400 hover:text-red-300">Remove</button>
        </div>
      )}
    </div>
  );
}
