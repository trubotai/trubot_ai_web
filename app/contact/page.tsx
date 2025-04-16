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
      <PageLayout className="flex flex-col items-center justify-center pb-0">
        <SectionHeader
          title="Let’s Connect"
          subtitle="Have a question, want a demo, or just want to say hi? We’d love to hear from you."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="text-lg font-semibold text-navy mb-1">Careers</h4>
            <a
              href="mailto:careers@trubotai.com"
              className="text-electric font-medium"
            >
              careers@trubotai.com
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-navy mb-1">Leadership</h4>
            <a
              href="mailto:gopal@trubotai.com"
              className="text-electric font-medium"
            >
              gopal@trubotai.com
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-navy mb-1">
              Sales Inquiries
            </h4>
            <a
              href="mailto:sales@trubotai.com"
              className="text-electric font-medium"
            >
              sales@trubotai.com
            </a>
          </div>
        </div>

        <div className="text-center text-white mt-6">
          <h5 className="text-lg font-semibold text-navy mb-1">
            Connect with Us
          </h5>

          <p className="text-gray-700 text-sm">
            <Link
              href="https://www.linkedin.com/in/gopalakrishnan-k-79474727/"
              className="hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Founder’s LinkedIn – Gopalakrishnan K
            </Link>
          </p>
        </div>
      </PageLayout>

      <PageLayout>
        {/* Office Locations */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {/* Florida */}
          <div className="rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            <div className="w-full aspect-video">
              <iframe
                title="Florida Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580568.1949590673!2d-83.91955728010085!3d28.78973868809425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20USA!5e0!3m2!1sen!2sin!4v1744794685108!5m2!1sen!2sin"
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
                Florida, USA
              </h4>
              <p className="text-sm text-gray-600">
                Serving clients across North America
              </p>
            </div>
          </div>

          {/* Chennai */}
          <div className="rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            <div className="w-full aspect-video">
              <iframe
                title="Chennai Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1313126384!2d80.0438591397053!3d13.047473315886025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1744794552916!5m2!1sen!2sin"
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
                Chennai, India
              </h4>
              <p className="text-sm text-gray-600">
                Serving clients across Asia
              </p>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Page;
