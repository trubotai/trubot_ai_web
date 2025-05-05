import type { Metadata } from "next";

import PageLayout from "../ui/components/shared/PageLayout";
import JobCard from "../ui/components/shared/JobCard";
import Button from "../ui/components/shared/Button";
import { jobList } from "../ui/libs/constants/careers";

export const metadata: Metadata = {
  title: "Careers – TruBot AI",
  description:
    "Join our growing team and help shape the future of AI-powered business automation.",
  keywords: [
    "TruBot AI Careers",
    "Jobs at TruBot AI",
    "Work at AI Startup",
    "AI Developer Jobs",
    "AI Product Manager Careers",
    "AI Design Jobs",
    "Tech Startup Hiring",
    "Remote AI Jobs",
    "AI Automation Careers",
    "AI Internship Opportunities",
    "Join AI Team",
    "Apply AI Company",
    "TruBot AI Hiring",
  ],
};

const Page = () => {
  return (
    <PageLayout id="careers">
      {/* Intro */}
      <div
        className="text-center mb-12 fade-in slide-in-up"
        role="region"
        aria-labelledby="careers-heading"
      >
        <h1
          id="careers-heading"
          className="text-4xl font-heading font-bold text-navy mb-4"
        >
          Join the Team
        </h1>
        <p className="text-lg text-navy/70 max-w-2xl mx-auto font-body">
          We&apos;re building the future of business automation — and we’d love
          to work with you.
        </p>
      </div>

      {/* Job Openings */}
      <div
        role="region"
        aria-labelledby="open-roles-heading"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in slide-in-up"
      >
        <h2 className="sr-only" id="open-roles-heading">
          Open Roles
        </h2>

        {jobList.map((job, idx) => (
          <JobCard key={job.id} {...job} index={idx} />
        ))}
      </div>

      {/* Outreach CTA */}
      <div
        className="text-center mt-16 fade-in slide-in-up animation-delay-600"
        role="region"
        aria-labelledby="reachout-heading"
      >
        <h2 id="reachout-heading" className="sr-only">
          Didn&apos;t find your role?
        </h2>
        <Button
          href="mailto:careers@trubotai.com?subject=Open Role Inquiry"
          variant="primary"
          animate
          label="Don’t see your role? Reach out anyway"
        />
      </div>
    </PageLayout>
  );
};

export default Page;
