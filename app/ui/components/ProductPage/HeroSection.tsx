import Button from "../Button";
import PageLayout from "../PageLayout";

interface CTAProps {
  label: string;
  href: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA: CTAProps;
  secondaryCTA: CTAProps;
}

const HeroSection = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <PageLayout className="text-center py-24">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-navy animate-fade-slide-up">
            {title}
          </h1>

          <p className="text-lg text-gray-600 animate-fade-slide-up animation-delay-200">
            {subtitle}
          </p>

          <div className="flex justify-center gap-4 pt-6 animate-fade-slide-up animation-delay-300">
            <Button href={primaryCTA.href} as="link" variant="primary" animate>
              {primaryCTA.label}
            </Button>

            <Button
              href={secondaryCTA.href}
              as="link"
              variant="outline"
              animate
            >
              {secondaryCTA.label}
            </Button>
          </div>
        </div>
      </PageLayout>
    </section>
  );
};

export default HeroSection;
