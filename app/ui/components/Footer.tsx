import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 py-10 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <p className="text-navy font-bold text-lg">TruBot AI</p>

          <p className="mt-2 text-sm">
            Building AI that works for real businesses.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold text-navy mb-2">Links</h4>

          <ul className="space-y-2">
            <li>
              <Link
                href="/products"
                className="hover:text-electric transition-colors duration-300"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                href="/solutions"
                className="hover:text-electric transition-colors duration-300"
              >
                Solutions
              </Link>
            </li>

            <li>
              <Link
                href="/careers"
                className="hover:text-electric transition-colors duration-300"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-navy mb-2">Contact</h4>

          <ul className="space-y-2">
            <li>
              <a
                href="mailto:support@trubotai.com"
                className="hover:text-electric transition-colors duration-300"
              >
                support@trubotai.com
              </a>
            </li>

            <li>
              <a
                href="mailto:careers@trubotai.com"
                className="hover:text-electric transition-colors duration-300"
              >
                careers@trubotai.com
              </a>
            </li>

            <li className="flex gap-4 pt-2">
              <Link
                href="https://www.linkedin.com/company/trubotai/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-electric transition-colors duration-300"
              >
                LinkedIn
              </Link>

              <Link
                href="https://twitter.com/trubotai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-electric transition-colors duration-300"
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
          className="hover:text-electric transition-colors duration-300"
        >
          Privacy Policy
        </Link>

        <span>|</span>

        <Link
          href="/terms"
          className="hover:text-electric transition-colors duration-300"
        >
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
