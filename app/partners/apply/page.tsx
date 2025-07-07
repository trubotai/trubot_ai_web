import { Metadata } from "next";

import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Button from "@/app/ui/components/shared/Button";
import HorizontalTimeline from "@/app/ui/components/shared/HorizontalTimeline";
import CTASection from "@/app/ui/components/shared/CTASection";
import {
  heroSection,
  formSection,
  nextStepSection,
  ctaSection,
} from "@/app/ui/libs/constants/partners/apply";

export const metadata: Metadata = {
  title: "Apply to TruBot AI Partner Program | Partnership Application",
  description:
    "Apply to become a TruBot AI partner. Submit your application to join our partner ecosystem and unlock new business opportunities, technical support, and co-marketing benefits.",
  keywords: [
    "TruBot AI Partner Application",
    "AI partnership application",
    "Apply for AI partnership",
    "SME AI partner application",
    "AI solution partner form",
    "TruBot AI partner program",
    "AI business partnership",
    "AI partner benefits",
    "AI co-marketing",
    "AI technical support",
    "AI for agencies",
    "AI for consultants",
    "AI for technology providers",
  ],
  authors: [{ name: "TruBot AI", url: "https://trubot.ai/partners/apply" }],
  creator: "TruBot AI",
  publisher: "TruBot AI",
  openGraph: {
    title: "Apply to TruBot AI Partner Program | Partnership Application",
    description:
      "Submit your application to join the TruBot AI partner ecosystem. Unlock new business opportunities, technical support, and co-marketing benefits.",
    url: "https://trubot.ai/partners/apply",
    siteName: "TruBot AI",
    images: [
      {
        url: "https://trubot.ai/images/partners/partnership-type.png",
        width: 1200,
        height: 630,
        alt: "TruBot AI Partner Application",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply to TruBot AI Partner Program | Partnership Application",
    description:
      "Apply to become a TruBot AI partner and unlock new business opportunities, technical support, and co-marketing benefits.",
    images: ["https://trubot.ai/images/partners/partnership-type.png"],
  },
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Application Form */}
      <div className="bg-gray-soft">
        <PageLayout id="application-form">
          <SectionHeader
            title={formSection.title}
            subtitle={formSection.subtitle}
          />

          <div className="max-w-3xl mx-auto">
            <form className="space-y-8">
              {/* Company Information */}
              <div className="bg-light rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-heading font-semibold text-navy mb-6">
                  Company Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company-name"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company-name"
                      name="companyName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                      placeholder="https://yourcompany.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                    >
                      <option value="">Select your industry</option>
                      <option value="technology">Technology</option>
                      <option value="consulting">Consulting</option>
                      <option value="agency">Digital Agency</option>
                      <option value="msp">Managed Services</option>
                      <option value="reseller">Reseller/Distributor</option>
                      <option value="startup">AI Startup</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="company-size"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Company Size *
                    </label>
                    <select
                      id="company-size"
                      name="companySize"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Partnership Information */}
              <div className="bg-light rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-heading font-semibold text-navy mb-6">
                  Partnership Information
                </h3>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="partnership-type"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Partnership Type *
                    </label>
                    <select
                      id="partnership-type"
                      name="partnershipType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                    >
                      {formSection.partnershipList.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="partnership-goals"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Partnership Goals *
                    </label>
                    <textarea
                      id="partnership-goals"
                      name="partnershipGoals"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                      placeholder="Describe your partnership goals and how you plan to work with TruBot AI..."
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-light rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-heading font-semibold text-navy mb-6">
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="job-title"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Job Title *
                    </label>
                    <input
                      type="text"
                      id="job-title"
                      name="jobTitle"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                      placeholder="Enter your job title"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-light rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-heading font-semibold text-navy mb-6">
                  Additional Information
                </h3>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="current-customers"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Current Customer Base
                    </label>
                    <textarea
                      id="current-customers"
                      name="currentCustomers"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                      placeholder="Describe your current customer base and target market..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="technical-capabilities"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Technical Capabilities
                    </label>
                    <textarea
                      id="technical-capabilities"
                      name="technicalCapabilities"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                      placeholder="Describe your technical capabilities and integration experience..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="questions"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Questions or Comments
                    </label>
                    <textarea
                      id="questions"
                      name="questions"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                      placeholder="Any questions or additional information you'd like to share..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  href="#"
                  label="Submit Application"
                  variant="primary"
                  animate
                  as="button"
                  type="submit"
                />
                <p className="text-sm text-navy/60 mt-4">
                  We&apos;ll review your application and get back to you within
                  5 business days.
                </p>
              </div>
            </form>
          </div>
        </PageLayout>
      </div>

      {/* Next Steps */}
      <PageLayout id="next-steps" className="relative z-10">
        <SectionHeader
          title={nextStepSection.title}
          subtitle={nextStepSection.subtitle}
        />
        {/* Timeline Line (only desktop) */}
        <div className="hidden lg:block absolute top-[50%] left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-1 bg-gray-200" />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {nextStepSection.stepList.map((step, idx) => (
            <HorizontalTimeline
              key={idx}
              stepNumber={idx + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={idx * 150}
            />
          ))}
        </div>
      </PageLayout>

      {/* CTA Section */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
