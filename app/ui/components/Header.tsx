"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { navLinkList } from "../libs/constants/site";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="TruBot AI Logo"
            className="rounded-full transition-transform duration-300 ease-in-out group-hover:rotate-6 group-hover:shadow-md"
            width={40}
            height={40}
            priority
          />
          <span className="text-base sm:text-lg font-bold text-navy">
            TruBot AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinkList.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-transform duration-200 ease-out transform hover:scale-[1.05] hover:text-electric hover:underline underline-offset-4 decoration-electric ${
                pathname === href ? "text-electric" : "text-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}

          <Link
            href="https://calendly.com/trubotai_founder_ceo/quick_connect_with_founder"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-electric text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition hover-scale-glow"
          >
            Request Demo
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="xl:hidden text-2xl text-navy focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            key={menuOpen ? "close" : "open"}
            className="transition-all duration-300 ease-in-out"
          >
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden px-4 pb-6 flex flex-col gap-2 items-center animate-fade-slide-up">
          {navLinkList.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block py-2 text-sm font-medium transition-transform duration-200 ease-out transform hover:scale-[1.05] hover:text-electric ${
                pathname === href ? "text-electric" : "text-gray-700"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="block mt-2 bg-electric text-white text-center px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition hover-scale-glow"
            onClick={() => setMenuOpen(false)}
          >
            Request Demo
          </Link>
          <Link
            href="https://calendly.com/trubotai_founder_ceo/quick_connect_with_founder"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-navy text-white text-center px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition hover-scale-glow"
            onClick={() => setMenuOpen(false)}
          >
            Book an Appointment
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
