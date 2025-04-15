import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 py-10 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="text-navy font-bold text-lg">TruBot AI</p>

          <p className="mt-2 text-sm">
            Building AI that works for real businesses.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-navy mb-2">Links</h4>

          <ul className="space-y-1">
            <li>
              <Link href="/products">Products</Link>
            </li>

            <li>
              <Link href="/solutions">Solutions</Link>
            </li>

            <li>
              <Link href="/careers">Careers</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-navy mb-2">Contact</h4>

          <ul className="space-y-1">
            <li>
              <a href="mailto:support@trubotai.com">support@trubotai.com</a>
            </li>

            <li>
              <a href="mailto:careers@trubotai.com">careers@trubotai.com</a>
            </li>

            <li className="pt-2 flex gap-4">
              <Link
                href="https://www.linkedin.com/company/trubot-ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>

              <Link
                href="https://www.linkedin.com/company/trubot-ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-xs">
        <Link href="/privacy" className="mx-2">
          Privacy Policy
        </Link>
        |
        <Link href="/terms" className="mx-2">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
