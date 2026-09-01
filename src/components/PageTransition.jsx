"use client";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  return (
    <>
      <div key={`sweep-${pathname}`} className="page-gold-sweep" aria-hidden="true" />
      <div key={pathname} className="page-transition-content">
        {children}
      </div>
    </>
  );
}
