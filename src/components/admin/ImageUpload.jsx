"use client";
import { useState, useRef } from "react";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default function ImageUpload({ value, onChange, folder = "avim-events", label = "Image", aspect }) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(value || "");
  const [cropSrc, setCropSrc] = useState(null);
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState(null);
  const inputRef = useRef(null);
  const imgRef = useRef(null);
  const pendingFileName = useRef("image.jpg");

  function onSelectFile(file) {
    if (!file) return;
    pendingFileName.current = file.name;
    const reader = new FileReader();
    reader.addEventListener("load", () => setCropSrc(reader.result?.toString() || ""));
    reader.readAsDataURL(file);
  }

  function onImageLoad(e) {
    const { naturalWidth: width, naturalHeight: height } = e.currentTarget;
    const initial = centerCrop(
      makeAspectCrop({ unit: "%", width: 90 }, aspect || width / height, width, height),
      width,
      height
    );
    setCrop(initial);
  }

  async function getCroppedBlob() {
    const image = imgRef.current;
    if (!image || !completedCrop) return null;
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = completedCrop.width * scaleX;
    canvas.height = completedCrop.height * scaleY;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      image,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0, 0,
      canvas.width,
      canvas.height
    );
    return new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.95));
  }

  async function handleConfirmCrop() {
    const blob = await getCroppedBlob();
    if (!blob) return;
    const croppedFile = new File([blob], pendingFileName.current, { type: "image/jpeg" });
    setCropSrc(null);
    setUploading(true);
    const fd = new FormData();
    fd.append("file", croppedFile);
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
    onSelectFile(file);
  }

  function cancelCrop() {
    setCropSrc(null);
    setCompletedCrop(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <>
      <div className="space-y-2">
        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider">{label}</label>
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => inputRef.current?.click()}
          className="relative border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-amber-400 transition-colors bg-gray-50 overflow-hidden"
          style={{ minHeight: preview ? 180 : 100 }}
        >
          {preview ? (
            <img src={preview} alt="preview" className="w-full h-44 object-cover" />
          ) : (
            <div className="flex flex-col items-center justify-center h-24 gap-2 text-gray-400">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs">Drag & drop or click to upload</span>
            </div>
          )}
          {uploading && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
              <span className="text-amber-600 text-sm animate-pulse font-medium">Uploading…</span>
            </div>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => onSelectFile(e.target.files[0])}
          />
        </div>
        {preview && (
          <div className="flex gap-2 items-center">
            <input
              value={preview}
              onChange={(e) => { setPreview(e.target.value); onChange(e.target.value); }}
              className="flex-1 bg-gray-50 border border-gray-200 rounded px-2 py-1 text-xs text-gray-700"
              placeholder="or paste URL"
            />
            <button
              type="button"
              onClick={() => { setPreview(""); onChange(""); }}
              className="text-xs text-red-500 hover:text-red-600"
            >
              Remove
            </button>
          </div>
        )}
      </div>

      {cropSrc && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 space-y-4">
            <div>
              <h3 className="text-base font-semibold text-gray-800">Adjust crop area</h3>
              <p className="text-xs text-gray-500 mt-0.5">Drag to reposition · drag corners to resize · only the selected area will be uploaded</p>
            </div>
            <div className="max-h-[60vh] overflow-auto flex justify-center bg-gray-100 rounded-lg p-2">
              <ReactCrop
                crop={crop}
                onChange={(c) => setCrop(c)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={aspect}
                ruleOfThirds
              >
                <img
                  ref={imgRef}
                  src={cropSrc}
                  alt="Crop preview"
                  style={{ maxHeight: "55vh", maxWidth: "100%" }}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
            </div>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={cancelCrop}
                className="px-4 py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmCrop}
                disabled={!completedCrop}
                className="px-4 py-2 text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 disabled:opacity-50 rounded-lg transition-colors"
              >
                Use this crop
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
