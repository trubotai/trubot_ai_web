export const metadata = {
  title: "TruBot AI",
  description: "AI-powered business automation platform for growing teams.",
};

import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
