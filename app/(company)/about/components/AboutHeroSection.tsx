import Button from "@/app/ui/components/shared/Button";
import PageLayout from "@/app/ui/components/shared/PageLayout";

interface CTA {
  label: string;
  href: string;
}

interface AboutHeroSectionProps {
  tagline: string;
  heading: string;
  subheading: string;
  primaryCTA: CTA;
  secondaryCTA?: CTA;
}

const AboutHeroSection = ({
  tagline,
  heading,
  subheading,
  primaryCTA,
  secondaryCTA,
}: AboutHeroSectionProps) => {
  return (
    <div className="relative bg-light text-navy overflow-hidden">
      {/* Radial Glow Behind Headline */}
      <div className="absolute top-1/3 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/10 blur-[120px] z-0 pointer-events-none" />

      <PageLayout
        id="about-hero"
        className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center"
        padding="lg"
      >
        {/* Tagline with typing effect */}
        <p
          className="text-electric max-w-md font-body text-md mb-4 typing-effect overflow-hidden"
          aria-label={tagline}
        >
          {tagline}
        </p>

        <div className="max-w-4xl text-center">
          <h1 className="text-5xl sm:text-6xl font-heading font-extrabold leading-tight tracking-tight mb-6 bg-gradient-to-r from-electric via-teal to-navy bg-clip-text text-transparent drop-shadow-md fade-in slide-in-up">
            {heading}
          </h1>

          <p className="text-lg sm:text-xl text-navy/70 font-body max-w-2xl mx-auto mb-10 px-4 py-4 fade-in slide-in-up animation-delay-200">
            {subheading}
          </p>

          <div className="flex flex-wrap justify-center gap-4 fade-in scale-up animation-delay-300">
            <Button
              href={primaryCTA.href}
              variant="primary"
              animate
              label={primaryCTA.label}
            />
            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant="outline"
                animate
                label={secondaryCTA.label}
              />
            )}
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default AboutHeroSection;
