import Button from "@/app/ui/components/Button";
import PageLayout from "@/app/ui/components/PageLayout";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden py-28 sm:py-36">
      <PageLayout className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left animate-fade-slide-up">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-navy leading-tight mb-6 transition-all hover:brightness-110">
            <span className="bg-gradient-to-r from-electric to-navy bg-clip-text text-transparent">
              AI Chatbots
            </span>
            <br />
            <span>Intelligent Conversations That Drive Results</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto md:mx-0 mb-10 animate-fade-slide-up animation-delay-200">
            Transform customer engagement with AI chatbots that deliver
            personalized, human-like interactions across all your digital
            channels.
          </p>

          <div className="flex flex-wrap md:justify-start justify-center gap-4 animate-fade-scale animation-delay-300">
            <Button href="/start-free-trial" variant="primary" animate>
              Start Free Trial
            </Button>
            <Button href="/live-demo" variant="outline" animate>
              See Live Demo
            </Button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hidden md:flex justify-center animate-float">
          <MessageCircle size={120} className="text-electric opacity-80" />
        </div>
      </PageLayout>

      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-electric opacity-10 rounded-full blur-3xl pointer-events-none z-0" />
    </div>
  );
};

export default HeroSection;
