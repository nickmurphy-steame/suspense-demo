"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";

export function ClickListener() {
  const addedRef = useRef(false);

  useEffect(() => {
    if (addedRef.current) return;
    const handler = () => {
      toast.info("Click event detected!");
    };

    document.addEventListener("click", handler);
    addedRef.current = true;

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return null;
}
