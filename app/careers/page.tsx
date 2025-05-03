import PageLayout from "../ui/components/shared/PageLayout";
import JobCard from "../ui/components/shared/JobCard";
import Button from "../ui/components/shared/Button";
import { jobList } from "../ui/libs/constants/careers";

export const metadata = {
  title: "Careers – TruBot AI",
  description:
    "Join our growing team and help shape the future of AI-powered business automation.",
};

const Page = () => {
  return (
    <PageLayout id="careers">
      <div className="text-center mb-12 fade-in slide-in-up">
        <div className="text-4xl font-heading font-bold text-navy mb-4">
          Join the Team
        </div>
        <p className="text-lg text-navy/70 max-w-2xl mx-auto font-body">
          We&apos;re building the future of business automation — and we’d love
          to work with you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in slide-in-up">
        {jobList.map((job, idx) => (
          <JobCard key={job.id} {...job} index={idx} />
        ))}
      </div>

      <div className="text-center mt-16 fade-in slide-in-up animation-delay-600">
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
