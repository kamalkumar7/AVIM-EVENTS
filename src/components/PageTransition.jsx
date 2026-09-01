"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    setTrigger((t) => t + 1);
  }, [pathname]);

  return (
    <>
      <div key={`sweep-${trigger}`} className="page-gold-sweep" aria-hidden="true" />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </>
  );
}
