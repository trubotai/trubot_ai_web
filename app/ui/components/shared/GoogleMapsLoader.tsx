"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";

export default function GoogleMapsLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mapsReady, setMapsReady] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY!,
      version: "weekly",
      libraries: ["places"],
    });
    loader.load().then(() => setMapsReady(true));
  }, []);

  if (!mapsReady) {
    return (
      <div className="w-full text-center py-10">Loading map features...</div>
    );
  }

  return <>{children}</>;
}
