"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { navLinks } from "../libs/constants/site";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="TruBot AI Logo"
            className="rounded-full"
            width={40}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium hover:text-electric transition ${
                pathname === href ? "text-electric" : "text-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-4 bg-electric text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700"
          >
            Request Demo
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-navy"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block py-2 text-sm font-medium ${
                pathname === href ? "text-electric" : "text-gray-700"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="block mt-2 bg-electric text-white text-center px-4 py-2 rounded-md font-semibold hover:bg-blue-700"
            onClick={() => setMenuOpen(false)}
          >
            Request Demo
          </Link>
        </div>
      )}
    </header>
  );
}
