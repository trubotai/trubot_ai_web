"use client";

import { useEffect, useState } from "react";

import { useInView } from "@/app/ui/libs/hooks/useInView";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms
}

export default function FadeInOnView({
  children,
  className = "",
  delay = 0,
}: Props) {
  const { ref, isVisible } = useInView();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, delay]);

  return (
    <div
      ref={ref}
      className={`
        ${show ? "animate-fadeIn" : "opacity-0"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
