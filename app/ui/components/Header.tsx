"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { navLinkList, productLinkList } from "../libs/constants/site";
import Button from "./shared/Button";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Go to homepage"
        >
          <Image
            src="/images/logo.png"
            alt="TruBot AI Logo"
            className="rounded-full transition-transform duration-300 group-hover:rotate-6 group-hover:shadow-md"
            width={40}
            height={40}
            priority
          />
          <span className="text-base sm:text-lg font-heading font-bold text-navy">
            TruBot AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden xl:flex items-center gap-6"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Products Dropdown */}
          <div className="relative group hidden xl:block">
            <button
              aria-haspopup="true"
              aria-expanded={productDropdownOpen}
              className="text-sm font-medium text-navy hover:text-electric transition-colors relative
                before:content-[''] before:absolute before:bottom-0 before:left-0
                before:h-[2px] before:bg-electric before:w-0 group-hover:before:w-full
                before:transition-all before:duration-300"
            >
              <Link href="/products">Products</Link>
            </button>

            <ul
              className="absolute top-full left-0 w-48 bg-white shadow-lg border border-gray-100 rounded-md p-2 z-50
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-opacity duration-200"
              aria-label="Product links"
            >
              {productLinkList.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block px-4 py-2 text-sm text-navy hover:text-electric transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Nav Links */}
          {navLinkList.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative text-sm font-medium transition-all hover:text-electric text-navy
                before:content-[''] before:absolute before:bottom-0 before:left-0
                before:h-[2px] before:bg-electric before:w-0 hover:before:w-full
                before:transition-all before:duration-300
                ${pathname === href ? "text-electric before:w-full" : ""}`}
            >
              {label}
            </Link>
          ))}

          {/* Desktop CTA */}
          <Button
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3GU3FqaXzxYUNEFvVUp1AAFUErY1k6klqKYNbU0X2tC7RZ_3AGQSuMjUeIeQ_4yCrjej7YLAEV"
            target="_blank"
            rel="noopener noreferrer"
            label="Request Demo"
            ariaLabel="Schedule a TruBot AI demo"
            variant="primary"
            animate
            className="ml-4"
          />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="xl:hidden text-2xl text-navy focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="transition-all duration-300">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className="xl:hidden w-full bg-white px-6 py-6 flex flex-col gap-3 items-center fade-in slide-in-up"
          aria-label="Mobile navigation"
        >
          {/* Products Dropdown */}
          <div className="w-full">
            <button
              onClick={() => setProductDropdownOpen((prev) => !prev)}
              className="w-full flex items-center justify-center gap-2 text-sm font-medium text-navy hover:text-electric transition-all py-2 rounded-md bg-gray-50 hover:bg-gray-soft border border-gray-100"
              aria-haspopup="true"
              aria-expanded={productDropdownOpen}
            >
              Products
              <span
                className={`transform transition-transform duration-200 ${
                  productDropdownOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {productDropdownOpen && (
              <ul
                className="mt-3 bg-white w-full rounded-lg shadow-md border border-gray-100 px-4 py-2 space-y-1"
                aria-label="Mobile product links"
              >
                {productLinkList.map(({ href, label }) => (
                  <li key={href} className="text-center">
                    <Link
                      href={href}
                      className="block py-2 text-sm text-navy hover:text-electric transition-colors rounded-md hover:bg-gray-50"
                      onClick={() => {
                        setMenuOpen(false);
                        setProductDropdownOpen(false);
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Other Nav Links */}
          {navLinkList.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block py-2 text-sm font-medium text-navy hover:text-electric w-full text-center
                ${pathname === href ? "text-electric" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          {/* Mobile CTAs */}
          <Button
            href="/contact"
            label="Request Demo"
            ariaLabel="Contact TruBot AI"
            variant="primary"
            animate
            fullWidth
            onClick={() => setMenuOpen(false)}
          />
          <Button
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3GU3FqaXzxYUNEFvVUp1AAFUErY1k6klqKYNbU0X2tC7RZ_3AGQSuMjUeIeQ_4yCrjej7YLAEV"
            label="Book an Appointment"
            ariaLabel="Book an appointment with TruBot AI"
            variant="secondary"
            animate
            fullWidth
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          />
        </nav>
      )}
    </header>
  );
};

export default Header;
