import { ArrowRight, ChevronDown } from "lucide-react";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import Button from "@/app/ui/components/shared/Button";

const AboutHeroSection = () => {
  return (
    <div className="relative bg-dark py-32 text-light overflow-hidden">
      <PageLayout
        id="about-hero"
        className="relative z-10 text-center flex flex-col items-center"
      >
        {/* Typing effect tagline */}
        <p className="text-electric max-w-md font-body text-md mb-4 typing-effect overflow-hidden">
          Empowering organizations with ethical, scalable AI
        </p>

        {/* Gradient headline */}
        <h1 className="text-5xl sm:text-6xl font-heading font-extrabold leading-tight mb-6 bg-gradient-to-r from-electric via-teal to-navy bg-clip-text text-transparent fade-in slide-in-up">
          Pioneering the Future of AI for Business
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-light/80 max-w-2xl mb-10 fade-in slide-in-up animation-delay-300">
          We&apos;re on a mission to make powerful AI solutions accessible, practical, and transformative for organizations of all sizes.
        </p>

        {/* CTA */}
        <Button
          href="/contact"
          variant="coral"
          animate
          label="Talk to Us"
          iconRight={ArrowRight}
          iconAnimate
        />
      </PageLayout>

      {/* Background glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-electric opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-coral opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-electric">
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  );
};

export default AboutHeroSection;
