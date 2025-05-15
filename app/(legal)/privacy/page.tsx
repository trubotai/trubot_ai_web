import type { Metadata } from "next";

import PageLayout from "@/app/ui/components/shared/PageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy – TruBot AI",
  description:
    "Understand how TruBot AI collects, uses, and protects your data.",
};

const Page = () => {
  return (
    <PageLayout id="privacy-policy">
      <div className="text-center mb-12">
        <h1
          id="privacy-policy-heading"
          className="text-4xl font-bold text-navy mb-4"
        >
          Privacy Policy
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto font-body">
          Your privacy is important to us. This page explains how TruBot AI
          collects, uses, and safeguards your data.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-0 space-y-10 text-gray-700 leading-relaxed font-body fade-in">
        <div>
          <h2 className="text-2xl font-bold text-navy mb-2">Data Collection</h2>
          <p>
            We collect limited personal information necessary to provide our
            services, improve customer support, and enhance user experience.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-navy mb-2">
            How We Use Information
          </h2>
          <p>
            Your information helps us personalize your experience, process
            transactions, send occasional updates, and respond to customer
            service requests.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-navy mb-2">Data Protection</h2>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information, including encrypted data storage and
            secure access protocols.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-navy mb-2">Cookies</h2>
          <p>
            TruBot AI may use cookies to enhance user experience. Users can
            choose to set their web browser to refuse cookies or alert them when
            cookies are being sent.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-navy mb-2">
            Third-Party Disclosure
          </h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally
            identifiable information to outside parties without your consent,
            except when necessary to operate our business.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-navy mb-2">
            Changes to This Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We encourage you
            to review this page periodically for any changes.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-navy mb-2">Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, you can
            contact us at{" "}
            <a
              href="mailto:support@trubotai.com"
              className="text-electric font-medium focus:outline-none focus:ring-2 focus:ring-electric"
            >
              support@trubotai.com
            </a>
            .
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
