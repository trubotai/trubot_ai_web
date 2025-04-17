import Link from "next/link";

import PageLayout from "../ui/components/PageLayout";
import SectionHeader from "../ui/components/SectionHeader";

export const metadata = {
  title: "Contact – TruBot AI",
  description:
    "Get in touch with our team for demo requests, business inquiries, or support.",
};

const Page = () => {
  return (
    <>
      {/* Contact Info */}
      <PageLayout className="flex flex-col items-center justify-center pb-0">
        <SectionHeader
          title="Let’s Connect"
          subtitle="Have a question, want a demo, or just want to say hi? We’d love to hear from you."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center w-full">
          {[
            { label: "Careers", email: "careers@trubotai.com" },
            { label: "Leadership", email: "gopal@trubotai.com" },
            { label: "Sales Inquiries", email: "sales@trubotai.com" },
          ].map((item, index) => (
            <div
              key={item.label}
              className={`animate-fade-slide-up ${
                index > 0 ? `animation-delay-${index * 100}` : ""
              }`}
            >
              <h4 className="text-lg font-semibold text-navy mb-1">
                {item.label}
              </h4>
              <a
                href={`mailto:${item.email}`}
                className="text-electric font-medium"
              >
                {item.email}
              </a>
            </div>
          ))}
        </div>

        {/* LinkedIn */}
        <div className="text-center text-white mt-8 animate-fade-slide-up animation-delay-400">
          <h5 className="text-lg font-semibold text-navy mb-1">
            Connect with Us
          </h5>

          <p className="text-gray-700 text-sm">
            <Link
              href="https://www.linkedin.com/in/gopalakrishnan-k-79474727/"
              className="hover:text-blue-400 underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Founder’s LinkedIn – Gopalakrishnan K
            </Link>
          </p>
        </div>
      </PageLayout>

      {/* Locations */}
      <PageLayout>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {[
            {
              title: "Florida, USA",
              description: "Serving clients across North America",
              iframeSrc:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580568.1949590673!2d-83.91955728010085!3d28.78973868809425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20USA!5e0!3m2!1sen!2sin!4v1744794685108!5m2!1sen!2sin",
            },
            {
              title: "Chennai, India",
              description: "Serving clients across Asia",
              iframeSrc:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1313126384!2d80.0438591397053!3d13.047473315886025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1744794552916!5m2!1sen!2sin",
            },
          ].map((office, index) => (
            <div
              key={office.title}
              className={`rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col animate-fade-slide-up animation-delay-${
                300 + index * 100
              }`}
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

              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-navy mb-1">
                  {office.title}
                </h4>
                <p className="text-sm text-gray-600">{office.description}</p>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </>
  );
};

export default Page;
