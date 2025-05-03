import Link from "next/link";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

import { footerLinkList, productLinkList } from "../libs/constants/site";

const Footer = () => {
  const linkClass =
    "relative inline-block text-sm transition-colors duration-300 text-navy font-medium hover:text-electric " +
    "before:content-[''] before:absolute before:bottom-0 before:left-0 " +
    "before:h-[2px] before:bg-electric before:w-0 hover:before:w-full " +
    "before:transition-all before:duration-300";

  const renderLinks = (links: typeof productLinkList) =>
    links.map(({ href, label }) => (
      <li key={href}>
        <Link href={href} className={linkClass}>
          {label}
        </Link>
      </li>
    ));

  const renderContact = () => (
    <>
      <li>
        <Link href="mailto:support@trubotai.com" className={linkClass}>
          support@trubotai.com
        </Link>
      </li>
      <li>
        <Link href="mailto:careers@trubotai.com" className={linkClass}>
          careers@trubotai.com
        </Link>
      </li>
      <li className="flex gap-4 pt-2" aria-label="Social Media">
        <Link
          href="https://www.linkedin.com/company/trubotai/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-navy hover:text-electric text-xl"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://twitter.com/trubotai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-navy hover:text-electric text-xl"
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCykytJyGUvapijemVYYp62w"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-navy hover:text-electric text-xl"
        >
          <FaYoutube />
        </Link>
      </li>
    </>
  );

  return (
    <footer id="footer">
      <div className="bg-gray-soft text-sm font-body text-navy py-10 border-t">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-3 gap-10 fade-in">
            <div>
              <p className="font-heading font-bold text-lg">TruBot AI</p>
              <p className="mt-2 text-sm leading-relaxed">
                Building AI that works for real businesses. Automating the
                future — one workflow at a time.
              </p>
            </div>

            <nav aria-label="Products">
              <h4 className="font-bold font-heading mb-2">Products</h4>
              <ul className="space-y-2">{renderLinks(productLinkList)}</ul>
            </nav>

            <div>
              <nav aria-label="Footer Links">
                <h4 className="font-bold font-heading mb-2">Links</h4>
                <ul className="space-y-2 mb-4">
                  {renderLinks(footerLinkList)}
                </ul>
              </nav>

              <address className="not-italic">
                <h4 className="font-bold font-heading mb-2">Contact</h4>
                <ul className="space-y-2">{renderContact()}</ul>
              </address>
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden space-y-6 fade-in">
            {[
              { title: "Products", content: renderLinks(productLinkList) },
              { title: "Links", content: renderLinks(footerLinkList) },
              { title: "Contact", content: renderContact() },
            ].map(({ title, content }, idx) => (
              <details key={idx}>
                <summary className="font-bold font-heading cursor-pointer">
                  {title}
                </summary>
                <ul className="mt-2 space-y-2 pl-4">{content}</ul>
              </details>
            ))}
          </div>

          {/* Legal */}
          <div className="text-center mt-10 text-xs space-x-4">
            <Link href="/privacy" className={linkClass}>
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className={linkClass}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-navy text-white text-center text-xs py-2">
        © {new Date().getFullYear()} TruBot AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
