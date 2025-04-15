import Hero from "./ui/components/LandingPage/Hero";
import Products from "./ui/components/LandingPage/Products";
import Benefits from "./ui/components/LandingPage/Benefits";
import Industries from "./ui/components/LandingPage/Industries";
import Testimonials from "./ui/components/LandingPage/Testimonials";
import FinalCTASection from "./ui/components/FinalCTASection";

const Page = () => {
  return (
    <>
      <Hero />
      <Products />
      <Benefits />
      <Industries />
      <Testimonials />
      <FinalCTASection
        title="Ready to See TruBot AI in Action?"
        subtitle="Book a demo and let our team help you explore what’s possible."
        ctaLabel="Talk to Our Team"
        ctaLink="/contact"
      />
    </>
  );
};

export default Page;
