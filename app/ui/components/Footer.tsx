import Link from "next/link";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

import {
  productLinkList,
  partnerLinkList,
  companyLinkList,
  solutionLinkList,
} from "../libs/constants/site";

const Footer = () => {
  const linkClass =
    "relative inline-block text-sm transition-colors duration-300 text-navy font-medium hover:text-electric " +
    "before:content-[''] before:absolute before:bottom-0 before:left-0 " +
    "before:h-[2px] before:bg-electric before:w-0 hover:before:w-full " +
    "before:transition-all before:duration-300";

  const renderLinks = (links: { href: string; label: string }[]) =>
    links.map(({ href, label }) => (
      <li key={href} className="text-left list-none">
        <Link href={href} className={linkClass}>
          {label}
        </Link>
      </li>
    ));

  const renderIndustries = (items: { label: string }[]) =>
    items.map(({ label }) => (
      <li
        key={label}
        className="text-left text-sm text-navy font-medium list-none"
      >
        {label}
      </li>
    ));

  return (
    <footer role="contentinfo" id="footer">
      <div className="bg-gray-soft text-sm font-body text-navy py-12 border-t">
        <div className="max-w-7xl mx-auto px-4">
          {/* Grid Layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-6 gap-10 text-left fade-in">
            <div className="col-span-2">
              <p className="font-heading font-bold text-lg">TruBot AI</p>
              <p className="mt-2 text-sm leading-relaxed">
                Building AI that works for real businesses. Automating the
                future — one workflow at a time.
              </p>
            </div>

            <nav aria-labelledby="footer-products-heading">
              <h4
                id="footer-products-heading"
                className="font-bold font-heading mb-2"
              >
                Products
              </h4>
              <ul className="space-y-2">{renderLinks(productLinkList)}</ul>
            </nav>

            <nav aria-labelledby="footer-solutions-heading">
              <h4
                id="footer-solutions-heading"
                className="font-bold font-heading mb-2"
              >
                Solutions
              </h4>
              <ul className="space-y-2">
                {renderIndustries(solutionLinkList)}
              </ul>
            </nav>

            <nav aria-labelledby="footer-partners-heading">
              <h4
                id="footer-partners-heading"
                className="font-bold font-heading mb-2"
              >
                Partners
              </h4>
              <ul className="space-y-2">{renderLinks(partnerLinkList)}</ul>
            </nav>

            <nav aria-labelledby="footer-company-heading">
              <h4
                id="footer-company-heading"
                className="font-bold font-heading mb-2"
              >
                Company
              </h4>
              <ul className="space-y-2">{renderLinks(companyLinkList)}</ul>
            </nav>
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden space-y-6 fade-in">
            {[
              {
                title: "Products",
                id: "mobile-products",
                content: renderLinks(productLinkList),
              },
              {
                title: "Solutions",
                id: "mobile-links",
                content: renderIndustries(solutionLinkList),
              },
              {
                title: "Partners",
                id: "mobile-partners",
                content: renderLinks(partnerLinkList),
              },
              {
                title: "Company",
                id: "mobile-company",
                content: renderLinks(companyLinkList),
              },
            ].map(({ title, content, id }, idx) => (
              <details key={idx}>
                <summary
                  id={id}
                  className="font-bold font-heading cursor-pointer"
                >
                  {title}
                </summary>
                <div className="mt-2 space-y-2 pl-4">{content}</div>
              </details>
            ))}
          </div>

          {/* Contact Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10">
            <div className="space-x-6 text-sm text-navy text-center md:text-left">
              <Link
                href="mailto:support@trubotai.com"
                className="inline-flex items-center gap-2 text-navy hover:text-electric text-sm font-medium"
              >
                <FaEnvelope className="text-base" /> support@trubotai.com
              </Link>
              <Link
                href="mailto:careers@trubotai.com"
                className="inline-flex items-center gap-2 text-navy hover:text-electric text-sm font-medium"
              >
                <FaEnvelope className="text-base" /> careers@trubotai.com
              </Link>
            </div>
            <div
              className="flex gap-4 text-xl text-navy"
              aria-label="Social Media"
            >
              <Link
                href="https://www.linkedin.com/company/trubotai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-electric"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://twitter.com/trubotai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-electric"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCykytJyGUvapijemVYYp62w"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-electric"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="text-center mt-6 text-xs space-x-4">
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

      <div className="bg-navy text-white text-center text-xs py-2" lang="en">
        © {new Date().getFullYear()} TruBot AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
