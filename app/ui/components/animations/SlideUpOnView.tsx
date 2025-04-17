"use client";

import { useEffect, useState } from "react";

import { useInView } from "@/app/ui/libs/hooks/useInView";

interface SlideUpOnViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // optional delay in ms
  distance?: number; // how much to slide up (px)
}

export default function SlideUpOnView({
  children,
  className = "",
  delay = 0,
  distance = 20,
}: SlideUpOnViewProps) {
  const { ref, isVisible } = useInView();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div
      ref={ref}
      className={`
        ${show ? "animate-slideUp" : `opacity-0 translate-y-[${distance}px]`}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
