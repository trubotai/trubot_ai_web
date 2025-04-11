import PageLayout from "../ui/components/PageLayout";
import SectionHeader from "../ui/components/SectionHeader";

export const metadata = {
  title: "Contact – TruBot AI",
  description:
    "Get in touch with our team for demo requests, business inquiries, or support.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="Let’s Connect"
        subtitle="Have a question, want a demo, or just want to say hi? We’d love to hear from you."
      />

      <div className="space-y-6 text-center ">
        <div>
          <h4 className="text-lg font-semibold text-navy mb-1">
            Sales & Partnerships
          </h4>

          <p className="text-sm text-gray-600">
            Reach out to our team for a personalized demo or business
            collaboration.
          </p>

          <a
            href="mailto:support@trubotai.com"
            className="text-electric font-medium"
          >
            support@trubotai.com
          </a>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-navy mb-1">Careers</h4>
          <p className="text-sm text-gray-600">
            Want to join us? Reach out directly or check our openings.
          </p>

          <a
            href="mailto:careers@trubotai.com"
            className="text-electric font-medium"
          >
            careers@trubotai.com
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
