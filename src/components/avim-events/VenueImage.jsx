"use client";

import { useState } from "react";

const FALLBACK = "/images/avim-events/placeholder-portfolio.svg";

export default function VenueImage({ src, alt, className, loading }) {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setImgSrc(FALLBACK)}
    />
  );
}
