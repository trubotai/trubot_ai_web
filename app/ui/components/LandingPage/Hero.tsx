import PageLayout from "../PageLayout";
import Button from "../Button";

const Hero = () => {
  return (
    <PageLayout className="text-center py-24 animate-fade-slide-up">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-navy mb-6 leading-tight">
          Boost Support. Drive Sales. Automate Smarter.
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          AI chatbots, voice bots, and multi-agent systems built to save time
          and supercharge customer engagement.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/products" className="animation-delay-100">
            Explore Products
          </Button>
          <Button
            className="hover-scale-glow animation-delay-200"
            href="/contact"
            variant="outline"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Hero;
