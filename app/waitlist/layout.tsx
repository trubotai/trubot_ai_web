import Script from "next/script";

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}&libraries=places`}
        strategy="beforeInteractive"
      />
      {children}
    </>
  );
}
