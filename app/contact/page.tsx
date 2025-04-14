import PageLayout from "../ui/components/PageLayout";
import SectionHeader from "../ui/components/SectionHeader";

export const metadata = {
  title: "Contact – TruBot AI",
  description:
    "Get in touch with our team for demo requests, business inquiries, or support.",
};

const Page = () => {
  return (
    <PageLayout className="min-h-screen flex flex-col items-center justify-center">
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
          <a
            href="https://www.linkedin.com/in/gopalakrishnan-k-79474727/"
            className="hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Founder’s LinkedIn – Gopalakrishnan K
          </a>
        </p>
      </div>
    </PageLayout>
  );
};

export default Page;
