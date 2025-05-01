import Link from "next/link";

import PageLayout from "../ui/components/PageLayout";
import SectionHeader from "../ui/components/SectionHeader";
import ContactCard from "../ui/components/ContactCard";
import FAQItem from "../ui/components/FAQItem";
import Button from "../ui/components/Button";
import { emailList, locationList, faqList } from "../ui/libs/constants/contact";

export const metadata = {
  title: "Contact – TruBot AI",
  description:
    "Get in touch with our team for demo requests, business inquiries, or support.",
};

const Page = () => {
  return (
    <>
      {/* Contact Info */}
      <PageLayout className="flex flex-col items-center justify-center py-12 sm:py-16">
        <SectionHeader
          title="Let’s Connect"
          subtitle="Have a question, want a demo, or just want to say hi? We’d love to hear from you."
        />

        {/* Short SEO Text */}
        <p className="text-center text-gray-600 max-w-2xl mb-10 sm:mb-12 animate-fade-slide-up">
          Get in touch with TruBot AI — your partner in AI-driven business
          automation, customer support, and growth solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {emailList.map((item, index) => (
            <ContactCard key={index} {...item} />
          ))}
        </div>

        {/* Founder CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-slide-up">
          <h3 className="text-2xl font-bold mb-4">Connect with Our Founder</h3>

          <p className="text-gray-700 text-sm sm:text-base mb-6">
            Have questions about how AI can transform your business? Connect
            directly with our founder or schedule a free consultation to explore
            tailored solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Link
              href="https://www.linkedin.com/in/gopalakrishnan-k-79474727/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              Connect on LinkedIn
            </Link>

            <Button
              href="https://calendly.com/trubotai_founder_ceo/quick_connect_with_founder"
              variant="outline"
              className="hover-scale-glow"
            >
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </PageLayout>

      {/* 🌍 Our Offices Section */}
      <PageLayout className="py-12 sm:py-16">
        <SectionHeader
          title="Our Offices"
          subtitle="We’re proud to have a global presence to support our clients worldwide."
        />

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {locationList.map((office, index) => (
            <div
              key={office.title}
              className={`animate-fade-slide-up animation-delay-${
                300 + index * 100
              }
                bg-white border border-gray-200 rounded-2xl overflow-hidden
                shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]`}
            >
              <div className="w-full aspect-video">
                <iframe
                  title={office.title}
                  src={office.iframeSrc}
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-none"
                />
              </div>

              <div className="p-5 text-center">
                <h4 className="text-lg font-semibold text-navy mb-2">
                  {office.title}
                </h4>
                <p className="text-sm text-gray-600">{office.description}</p>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>

      {/* FAQ Section */}
      <PageLayout className="py-12 sm:py-16">
        <div className="w-full max-w-3xl mx-auto animate-fade-slide-up">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqList.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </PageLayout>

      {/* Connect with Us Section */}
      <PageLayout className="py-12 sm:py-16">
        <div className="text-center animate-fade-slide-up">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <p className="text-gray-700 mb-6">
            Stay updated on the latest AI innovations, insights, and TruBot AI
            announcements by following us on LinkedIn.
          </p>
          <Link
            href="https://www.linkedin.com/company/trubotai"
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            TruBot AI LinkedIn
          </Link>
        </div>
      </PageLayout>

      {/* Emergency Support */}
      <PageLayout className="py-12 sm:py-16">
        <div className="text-center bg-red-50 p-6 sm:p-8 rounded-2xl animate-fade-slide-up max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-red-600">
            Emergency Support
          </h3>

          <p className="text-gray-700 mb-4">
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

          <p className="text-gray-500 text-sm">
            We guarantee a response within 2 hours for all emergency support
            requests.
          </p>
        </div>
      </PageLayout>
    </>
  );
};

export default Page;
