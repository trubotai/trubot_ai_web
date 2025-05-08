import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaClock } from "react-icons/fa";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import CheckList from "@/app/ui/components/shared/CheckList";
import Button from "@/app/ui/components/shared/Button";
import JobHeroSection from "./components/JobHeroSection";
import { careerPagesMap } from "@/app/ui/libs/constants/careersPage";
import { CareerPageDataType } from "@/app/ui/libs/types/careerPage";

export async function generateStaticParams() {
  return Object.keys(careerPagesMap).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = careerPagesMap[slug] as CareerPageDataType;

  return {
    title: `${data?.title} – TruBot AI`,
    description: data?.shortDescription,
    keywords: [
      "TruBot AI Careers",
      `${data?.title} Job Opening`,
      `Remote ${data?.title} Role`,
      `AI Job at TruBot AI`,
      "AI Hiring",
      "Join TruBot AI",
      "Tech Startup Jobs",
      "Open Roles at TruBot",
    ],
  };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = careerPagesMap[slug] as CareerPageDataType;

  if (!data) return notFound();

  const {
    title,
    location,
    type,
    shortDescription,
    about,
    roleIntro,
    responsibilities,
    qualifications,
    benefits,
    applyInstructions,
    applyEmail,
    workingHours,
    compensation,
  } = data;

  const emailSubject = `Application for ${title}`;
  const mailtoLink = `mailto:${applyEmail}?subject=${encodeURIComponent(
    emailSubject
  )}`;

  return (
    <>
      {/* Hero */}
      <JobHeroSection
        title={title}
        location={location}
        type={type}
        shortDescription={shortDescription}
        applyHref={mailtoLink}
      />

      {/* About TruBot AI */}
      <PageLayout
        id="about-trubot-ai"
        maxWidth="narrow"
        className="mb-12 fade-in slide-in-up animation-delay-300 pt-16 md:pt-20 px-4 md:px-0"
        padding="none"
      >
        <SectionHeader title="Who are we?" subtitle={about} align="left" />
      </PageLayout>

      {/* Role Introduction */}
      <PageLayout
        id="role-intro"
        maxWidth="narrow"
        className="mb-12 fade-in slide-in-up animation-delay-300 px-4 md:px-0"
        padding="none"
      >
        <SectionHeader
          title="Who are we looking for?"
          subtitle={roleIntro}
          align="left"
        />
        <blockquote className="mt-6 italic text-navy/70 font-body border-l-4 border-electric pl-4">
          “This role isn’t just about operations—it’s about shaping the future
          of AI-driven business.”
        </blockquote>
      </PageLayout>

      {/* Responsibilities */}
      <PageLayout
        id="responsibilities"
        maxWidth="narrow"
        padding="none"
        className="mb-12 fade-in slide-in-up animation-delay-300 px-4 md:px-0"
      >
        <SectionHeader title="Responsibilities" align="left" />
        <CheckList items={responsibilities} />
      </PageLayout>

      {/* Qualifications */}
      <PageLayout
        id="qualifications"
        maxWidth="narrow"
        padding="none"
        className="mb-12 fade-in slide-in-up animation-delay-300 px-4 md:px-0"
      >
        <SectionHeader title="Qualifications & Attributes" align="left" />
        <CheckList items={qualifications} />
      </PageLayout>

      {/* Benefits */}
      <PageLayout
        id="benefits"
        maxWidth="narrow"
        padding="none"
        className="mb-12 fade-in slide-in-up animation-delay-300 px-4 md:px-0"
      >
        <SectionHeader title="Why Join Us?" align="left" />
        <CheckList items={benefits} />
      </PageLayout>

      {/* Working Hours */}
      {workingHours && (
        <PageLayout
          id="working-hours"
          maxWidth="narrow"
          className="mb-12 fade-in slide-in-up animation-delay-300 px-4 md:px-0"
          padding="none"
        >
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <FaClock className="text-electric text-lg mr-3" />
              <h2 className="text-2xl font-heading font-semibold text-navy">
                Working Hours
              </h2>
            </div>
            <p className="text-navy/80 font-body text-base leading-relaxed">
              {workingHours} We encourage asynchronous productivity with regular
              syncs.
            </p>
          </div>
        </PageLayout>
      )}

      {/* Compensation */}
      {compensation && (
        <PageLayout
          id="compensation"
          maxWidth="narrow"
          className="mb-12 fade-in slide-in-up animation-delay-300 px-4 md:px-0"
          padding="none"
        >
          <SectionHeader
            title="Compensation"
            subtitle={compensation}
            align="left"
          />
        </PageLayout>
      )}

      {/* Apply CTA */}
      <PageLayout id="apply">
        <SectionHeader title="Ready to Apply?" subtitle={applyInstructions} />
        <div className="mt-8 text-center">
          <Button
            href={mailtoLink}
            aria-label={`Apply for ${title} role via email`}
            label="Apply via Email"
            variant="primary"
            animate
            rounded="full"
          />
        </div>
      </PageLayout>
    </>
  );
};

export default Page;
