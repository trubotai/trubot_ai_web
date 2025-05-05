import { ArrowRight } from "lucide-react";

import PageLayout from "./PageLayout";
import Button from "./Button";

interface CallToActionProps {
  title: string;
  subtitle?: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

const CTASection = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: CallToActionProps) => {
  return (
    <div className="bg-navy">
      <PageLayout id="cta" ariaLabelledby="cta-heading">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl text-light font-heading font-semibold mb-4"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-md md:text-lg font-body mb-8 text-light/90">
              {subtitle}
            </p>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              label={primaryCTA.label}
              variant="primary"
              size="lg"
              href={primaryCTA.href}
              animate
              iconRight={ArrowRight}
            />
            {secondaryCTA && (
              <Button
                label={secondaryCTA.label}
                variant="teal"
                size="lg"
                href={secondaryCTA.href}
                animate
                iconRight={ArrowRight}
              />
            )}
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default CTASection;
