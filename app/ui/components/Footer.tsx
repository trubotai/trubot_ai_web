import Link from "next/link";

import { footerLinkList } from "../libs/constants/site";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 py-10 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <p className="text-navy font-bold text-lg">TruBot AI</p>

          <p className="mt-2 text-sm leading-relaxed">
            Building AI that works for real businesses. Automating the future —
            one workflow at a time.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold text-navy mb-2">Links</h4>

          <ul className="space-y-2">
            {footerLinkList.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-all duration-300 hover:text-electric hover:underline underline-offset-4 hover:scale-[1.05] inline-block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-navy mb-2">Contact</h4>

          <ul className="space-y-2">
            <li>
              <Link
                href="mailto:support@trubotai.com"
                className="transition-all duration-300 hover:text-electric hover:underline underline-offset-4 hover:scale-[1.05] inline-block"
              >
                support@trubotai.com
              </Link>
            </li>

            <li>
              <Link
                href="mailto:careers@trubotai.com"
                className="transition-all duration-300 hover:text-electric hover:underline underline-offset-4 hover:scale-[1.05] inline-block"
              >
                careers@trubotai.com
              </Link>
            </li>

            <li className="flex gap-4 pt-2">
              <Link
                href="https://www.linkedin.com/company/trubotai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TruBot AI on LinkedIn"
                className="transition-all duration-300 hover:text-electric hover:underline underline-offset-4 hover:scale-[1.05]"
              >
                LinkedIn
              </Link>

              <Link
                href="https://www.linkedin.com/company/trubotai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TruBot AI on Twitter"
                className="transition-all duration-300 hover:text-electric hover:underline underline-offset-4 hover:scale-[1.05]"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="text-center mt-8 text-xs space-x-4">
        <Link
          href="/privacy"
          className="transition-all duration-300 hover:text-electric hover:underline underline-offset-4 hover:scale-[1.05] inline-block"
        >
          Privacy Policy
        </Link>

        <span>|</span>

        <Link
          href="/terms"
          className="transition-all duration-300 hover:text-electric hover:underline underline-offset-4 hover:scale-[1.05] inline-block"
        >
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
