"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 animate-fade-slide-up">
      <h1 className="text-4xl font-bold text-navy mb-3">
        Something went wrong
      </h1>

      <p className="text-gray-600 max-w-md mb-6">
        An unexpected error occurred. Please try again or contact our support
        team if the issue persists.
      </p>

      <button
        onClick={reset}
        className="bg-electric text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        aria-label="Try Again"
      >
        Try Again
      </button>
    </div>
  );
}
