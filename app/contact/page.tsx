import type { Metadata } from "next";
import Link from "next/link";
import {
  FaArrowRight,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";

import HeroSection from "../ui/components/shared/HeroSection";
import PageLayout from "../ui/components/shared/PageLayout";
import SectionHeader from "../ui/components/shared/SectionHeader";
import BenefitCard from "../ui/components/shared/BenefitCard";
import Button from "../ui/components/shared/Button";
import FAQSection from "../ui/components/shared/FAQSection";
import {
  heroSection,
  emailList,
  locationList,
  faqSection,
} from "../ui/libs/constants/contact";

export const metadata: Metadata = {
  title: "Contact – TruBot AI",
  description:
    "Get in touch with our team for demo requests, business inquiries, or support.",
  keywords: [
    "Contact TruBot AI",
    "AI Consultation",
    "TruBot AI Support",
    "TruBot AI Offices",
    "Book AI Demo",
    "AI Business Inquiries",
    "AI Founder's Contact",
    "Schedule AI Consultation",
    "AI Emergency Support",
    "Connect with TruBot AI",
    "AI Company Contact",
    "TruBot AI Helpdesk",
    "TruBot AI LinkedIn",
  ],
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Connect with Right Team */}
      <PageLayout id="connect-team">
        <SectionHeader
          title="Connect With the Right Team"
          subtitle="Reach out directly to the appropriate contact for your needs."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 fade-in slide-in-up">
          {emailList.map((item, index) => (
            <BenefitCard key={index} {...item} />
          ))}
        </div>
      </PageLayout>

      {/* Global Offices */}
      <div className="bg-gray-soft">
        <PageLayout id="global-offices">
          <SectionHeader
            title="Our Global Offices"
            subtitle="Discover our presence around the world."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {locationList.map((location, index) => (
              <div
                key={index}
                className="bg-light rounded-xl shadow-md hover:shadow-lg hover-scale fade-in slide-in-up overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <iframe
                  src={location.iframeSrc}
                  loading="lazy"
                  title={`Map of ${location.title}`}
                  aria-label={`Map showing location of ${location.title}`}
                  className="w-full h-64 md:h-80 border-0"
                  allowFullScreen
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <FaMapMarkerAlt
                      className="text-electric"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl sm:text-2xl font-heading font-semibold text-navy">
                      {location.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-navy/80 font-body">
                    {location.description}
                  </p>
                  <Button
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      location.title
                    )}`}
                    label="Open in Google Maps"
                    variant="link"
                    target="_blank"
                    iconRight={FaArrowRight}
                  />
                </div>
              </div>
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Book Consultation */}
      <PageLayout id="book-consultation">
        <SectionHeader
          title="Book a Personalized Consultation"
          subtitle="Schedule a 30-minute session with our founder or an AI expert to explore tailored solutions, see our technology in action, and get answers to your questions."
          align="center"
        />

        <div className="text-center mt-12 sm:mt-16 fade-in slide-in-up">
          <p className="text-navy/70 text-sm sm:text-base font-body max-w-2xl mx-auto mb-6">
            Whether you&apos;re exploring how AI can transform your operations
            or have specific goals in mind, we’re here to help you take the next
            step confidently.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Button
              href="https://www.linkedin.com/in/gopalakrishnan-k-79474727/"
              variant="link"
              label="Connect on LinkedIn"
              target="_blank"
              animate
            />
            <Button
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3GU3FqaXzxYUNEFvVUp1AAFUErY1k6klqKYNbU0X2tC7RZ_3AGQSuMjUeIeQ_4yCrjej7YLAEV"
              variant="outline"
              label="Book a Free Consultation"
              target="_blank"
              animate
            />
          </div>
        </div>
      </PageLayout>

      {/* FAQ */}
      <div role="region" className="bg-gray-soft">
        <FAQSection {...faqSection} />
      </div>

      {/* Connect With Us */}
      <PageLayout id="connect">
        <SectionHeader
          title="Connect With Us"
          subtitle="Stay updated with the latest AI trends, best practices, and company news."
        />

        {/* Social Media */}
        <div className="mt-10 text-center fade-in slide-in-up">
          <h3 className="text-xl font-heading font-semibold text-navy mb-4">
            Follow Us on Social Media
          </h3>
          <div className="flex justify-center gap-6 text-2xl text-electric">
            <Link
              href="https://www.linkedin.com/company/trubotai"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="hover-scale hover:text-teal transition" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/trubotai"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter className="hover-scale hover:text-teal transition" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/trubotai"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook className="hover-scale hover:text-teal transition" />
            </Link>
          </div>
        </div>

        {/* Blog & Newsletter */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-center fade-in slide-in-up">
          <div>
            <h4 className="text-lg font-heading font-semibold text-navy mb-2">
              Blog and Resources
            </h4>
            <p className="text-navy/70 font-body text-sm mb-4">
              Stay informed on AI innovations, implementation tips, and industry
              insights.
            </p>
            <Button
              href="/blog"
              variant="link"
              label="Visit Our Blog"
              animate
            />
          </div>
          <div>
            <h4 className="text-lg font-heading font-semibold text-navy mb-2">
              Newsletter
            </h4>
            <p className="text-navy/70 font-body text-sm mb-4">
              Subscribe to our monthly newsletter for AI insights, product
              updates, and more.
            </p>
            <Button
              href="/newsletter"
              variant="link"
              label="Subscribe Now"
              animate
            />
          </div>
        </div>

        {/* Emergency Support */}
        <div
          role="region"
          aria-labelledby="emergency-heading"
          className="mt-16 text-center bg-red-50 p-6 sm:p-8 rounded-2xl fade-in slide-in-up max-w-3xl mx-auto"
        >
          <h3
            id="emergency-heading"
            className="text-2xl font-heading font-bold mb-4 text-red-600"
          >
            Emergency Support
          </h3>
          <p className="text-navy font-body mb-4">
            Experiencing a critical issue or service disruption? Our team is
            here to assist you promptly. Please email{" "}
            <a
              href="mailto:support@trubotai.com"
              className="text-red-500 font-semibold underline"
            >
              support@trubotai.com
            </a>{" "}
            for immediate support.
          </p>
          <p className="text-gray-500 text-sm font-body">
            We guarantee a response within 2 hours for all emergency support
            requests.
          </p>
        </div>
      </PageLayout>
    </>
  );
};

export default Page;
