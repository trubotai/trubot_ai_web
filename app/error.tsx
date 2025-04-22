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
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-navy mb-2">
        Something went wrong
      </h1>

      <p className="text-gray-600 mb-4">
        An unexpected error occurred. Please try again or contact support.
      </p>

      <button
        onClick={() => reset()}
        className="bg-electric text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
}
