import { Sora } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";

import "./globals.css";

export const metadata = {
  title: "TruBot AI – AI Automation for Modern Teams",
  description:
    "Chatbots, voicebots, and AI agents tailored for modern business workflows. Discover TruBot AI today.",
  keywords: [
    "AI Chatbots",
    "AI Voicebots",
    "Customer Automation",
    "Workflow Automation",
    "TruBot AI",
    "Business AI",
  ],
  openGraph: {
    title: "TruBot AI – AI Automation for Modern Teams",
    description:
      "Explore TruBot AI — Chatbots, voice automation, and AI agents built for fast-growing teams.",
    url: "https://www.trubotai.com",
    siteName: "TruBot AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TruBot AI – AI Automation for Modern Teams",
    description:
      "Explore TruBot AI — Chatbots, voice automation, and AI agents built for fast-growing teams.",
    site: "@trubotai",
    creator: "@trubotai",
  },
};

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white text-gray-900 ${sora.className}`}>
        <Header />

        <main>{children}</main>
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
