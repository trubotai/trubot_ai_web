import Link from "next/link";

import PageLayout from "@/app/ui/components/shared/PageLayout";

export const metadata = {
  title: "Terms of Service – TruBot AI",
  description:
    "Review the terms and conditions for using TruBot AI’s services and platform.",
};

const Page = () => {
  return (
    <PageLayout id="terms-of-service">
      <h1 className="text-3xl font-bold text-navy mb-8 text-center">
        Terms of Service
      </h1>

      <div className="space-y-12 text-gray-700 leading-relaxed max-w-3xl mx-auto font-body fade-in">
        {/* Introduction */}
        <div role="region" aria-labelledby="tos-intro">
          <h2 id="tos-intro" className="text-2xl font-bold text-navy mb-3">
            1. Introduction
          </h2>
          <p>
            Welcome to TruBot AI. These Terms of Service (&quot;Terms&quot;)
            govern your use of our website, products, and services. By accessing
            or using TruBot AI, you agree to be bound by these Terms.
          </p>
        </div>

        {/* Use of Services */}
        <div role="region" aria-labelledby="tos-usage">
          <h2 id="tos-usage" className="text-2xl font-bold text-navy mb-3">
            2. Use of Our Services
          </h2>
          <p>
            You agree to use our services only for lawful purposes and in
            accordance with these Terms. TruBot AI reserves the right to suspend
            or terminate access for violations.
          </p>
        </div>

        {/* Intellectual Property */}
        <div role="region" aria-labelledby="tos-ip">
          <h2 id="tos-ip" className="text-2xl font-bold text-navy mb-3">
            3. Intellectual Property
          </h2>
          <p>
            All content, trademarks, and technology on TruBot AI are owned by us
            or our licensors. You may not copy, modify, distribute, or sell any
            part of our services without our prior written consent.
          </p>
        </div>

        {/* Privacy Policy */}
        <div role="region" aria-labelledby="tos-privacy">
          <h2 id="tos-privacy" className="text-2xl font-bold text-navy mb-3">
            4. Privacy Policy
          </h2>
          <p>
            Your privacy is important to us. Please review our{" "}
            <Link href="/privacy" className="text-electric font-medium">
              Privacy Policy
            </Link>{" "}
            to understand how we collect, use, and protect your information.
          </p>
        </div>

        {/* Payment Terms */}
        <div role="region" aria-labelledby="tos-payments">
          <h2 id="tos-payments" className="text-2xl font-bold text-navy mb-3">
            5. Payments and Subscriptions
          </h2>
          <p>
            If you purchase any paid services, you agree to pay the applicable
            fees. Subscription terms, billing cycles, and refund policies will
            be outlined at the time of purchase.
          </p>
        </div>

        {/* Termination */}
        <div role="region" aria-labelledby="tos-termination">
          <h2
            id="tos-termination"
            className="text-2xl font-bold text-navy mb-3"
          >
            6. Termination
          </h2>
          <p>
            TruBot AI may suspend or terminate your access if you breach these
            Terms or engage in any prohibited activities. Upon termination, your
            right to use our services will immediately cease.
          </p>
        </div>

        {/* Disclaimers */}
        <div role="region" aria-labelledby="tos-disclaimer">
          <h2 id="tos-disclaimer" className="text-2xl font-bold text-navy mb-3">
            7. Disclaimers
          </h2>
          <p>
            Our services are provided on an &quot;as-is&quot; basis. We do not
            guarantee that the services will always be safe, secure, or
            error-free.
          </p>
        </div>

        {/* Liability */}
        <div role="region" aria-labelledby="tos-liability">
          <h2 id="tos-liability" className="text-2xl font-bold text-navy mb-3">
            8. Limitation of Liability
          </h2>
          <p>
            TruBot AI shall not be liable for any indirect, incidental, or
            consequential damages arising from your use of our services.
          </p>
        </div>

        {/* Governing Law */}
        <div role="region" aria-labelledby="tos-law">
          <h2 id="tos-law" className="text-2xl font-bold text-navy mb-3">
            9. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of State of Florida, USA without regard to its conflict of
            law principles.
          </p>
        </div>

        {/* Contact */}
        <div role="region" aria-labelledby="tos-contact">
          <h2 id="tos-contact" className="text-2xl font-bold text-navy mb-3">
            10. Contact Us
          </h2>
          <p>
            For any questions regarding these Terms, please contact us at{" "}
            <a
              href="mailto:support@trubotai.com"
              className="text-electric font-medium"
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
