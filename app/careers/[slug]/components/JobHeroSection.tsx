import { FC } from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import Button from "@/app/ui/components/shared/Button";

interface JobHeroSectionProps {
  title: string;
  location: string;
  type: string;
  shortDescription: string;
  applyHref?: string;
}

const JobHeroSection: FC<JobHeroSectionProps> = ({
  title,
  location,
  type,
  shortDescription,
  applyHref = "#apply",
}) => {
  return (
    <div
      id="job-hero"
      role="region"
      aria-label="Job Hero Section"
      className="relative bg-gradient-to-br from-electric to-navy text-light py-24 px-6 overflow-hidden"
    >
      <PageLayout className="text-center relative z-10">
        <div className="max-w-4xl mx-auto fade-in text-light slide-in-up">
          <h1 className="text-4xl md:text-5xl  font-heading font-extrabold mb-6">
            {title}
          </h1>

          <div className="flex justify-center gap-4 mb-4 text-sm font-medium">
            <span className="flex items-center bg-white/10 px-4 py-1 rounded-full">
              <FaMapMarkerAlt className="mr-2 text-white/80" />
              {location}
            </span>
            <span className="flex items-center bg-white/10 px-4 py-1 rounded-full">
              <FaClock className="mr-2 text-white/80" />
              {type}
            </span>
          </div>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-body">
            {shortDescription}
          </p>

          <Button
            href={applyHref}
            label="Apply Now"
            variant="teal"
            animate
            rounded="full"
          />
        </div>
      </PageLayout>
    </div>
  );
};

export default JobHeroSection;
