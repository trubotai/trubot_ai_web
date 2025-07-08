"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";

import PageLayout from "../ui/components/shared/PageLayout";

export default function WaitlistLayout({
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
      <PageLayout className="min-h-screen text-center">
        Loading Input Form...
      </PageLayout>
    );
  }

  return <>{children}</>;
}
