import PageLayout from "../PageLayout";
import Button from "../Button";

const Hero = () => {
  return (
    <PageLayout className="text-center py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-navy mb-4">
          Boost Support. Drive Sales. Automate Smarter.
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          AI chatbots, voice bots, and multi-agent systems built to save time
          and supercharge customer engagement.
        </p>

        <div className="flex justify-center gap-4">
          <Button href="/products">Explore Products</Button>
          <Button
            className="hover-scale-glow"
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
