import Link from "next/link";

import PageLayout from "../ui/components/PageLayout";
import SectionHeader from "../ui/components/SectionHeader";
import { emailList, locationList } from "../ui/libs/constants/contact";

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
          {emailList.map((item, index) => (
            <div
              key={item.label}
              className={`
                animate-fade-slide-up animation-delay-${(index + 1) * 100}
                bg-white border border-gray-200 rounded-xl p-6
                transition-all duration-300 hover-scale-glow
              `}
            >
              <h4 className="text-lg font-semibold text-navy mb-1">
                {item.label}
              </h4>
              <address className="not-italic">
                <a
                  href={`mailto:${item.email}`}
                  className="text-electric font-medium"
                >
                  {item.email}
                </a>
              </address>
            </div>
          ))}
        </div>

        {/* LinkedIn */}
        <div className="text-center mt-12 animate-fade-slide-up animation-delay-400">
          <h5 className="text-lg font-semibold text-navy mb-2">
            Connect with Us
          </h5>

          <p className="text-gray-700 text-sm">
            <Link
              href="https://www.linkedin.com/in/gopalakrishnan-k-79474727/"
              className="hover:text-blue-500 transition-colors"
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
          {locationList.map((office, index) => (
            <div
              key={office.title}
              className={`
                animate-fade-slide-up animation-delay-${300 + index * 100}
                bg-white border border-gray-200 rounded-xl overflow-hidden
                shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]
              `}
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
