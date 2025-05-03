import MainHero from "./ui/components/landing/MainHero";
import SectionHeader from "./ui/components/shared/SectionHeader";
import FeatureCard from "./ui/components/shared/FeatureCard";
import PageLayout from "./ui/components/shared/PageLayout";
import ProductCard from "./ui/components/shared/ProductCard";
import Button from "./ui/components/shared/Button";
import SolutionCard from "./ui/components/shared/SolutionCard";
import TabCard from "./ui/components/shared/TabCard";
import TestimonialCard from "./ui/components/shared/TestimonialCard";
import CTASection from "./ui/components/shared/CTASection";
import {
  benefitList,
  marketplaceList,
  productList,
  smeFocusList,
  testimonialList,
} from "./ui/libs/constants";

export const metadata = {
  title: "TruBot AI – AI Automation for Modern Teams",
  description:
    "TruBot AI helps businesses reduce support costs, automate tasks, and drive real ROI with intelligent chat, voice, and agent solutions.",
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <MainHero />

      {/* Benefit */}
      <div className="bg-gray-soft">
        <PageLayout id="key-benefits">
          <SectionHeader
            title="Key Benefits of Our AI Solutions"
            subtitle="From automation to innovation, discover how TruBot AI transforms business."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefitList.map((benefit, idx) => (
              <FeatureCard
                key={idx}
                icon={benefit.icon}
                title={benefit.title}
                subtitle={benefit.subtitle}
                description={benefit.description}
                index={idx}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* Products */}
      <PageLayout id="products">
        <SectionHeader
          title="Comprehensive AI Solutions for Every Business Need"
          subtitle="Explore how each product tackles a specific business challenge, with seamless integration and enterprise-ready reliability."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productList.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
              link={product.link}
              animationDelay={index * 100}
            />
          ))}
        </div>
      </PageLayout>

      {/* Marketplace */}
      <div className="bg-gray-soft">
        <PageLayout id="marketplace">
          <SectionHeader
            title="Discover the AI Marketplace: Your One-Stop Solution Hub"
            subtitle="Access a curated ecosystem of specialized AI solutions from trusted partners — all with seamless integration and enterprise-grade security."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {marketplaceList.map((solution, index) => (
              <SolutionCard
                key={index}
                name={solution.name}
                provider={solution.provider}
                description={solution.description}
                icon={solution.icon}
                tags={solution.tags}
                link={solution.link}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Button
              href="/solutions"
              label="Explore the Full Marketplace"
              variant="outline"
              animate
            />
          </div>
        </PageLayout>
      </div>

      {/* SME Focus */}
      <PageLayout id="sme-focus">
        <SectionHeader
          title="Tailored AI Solutions for Small and Medium Enterprises"
          subtitle="We believe in democratizing AI technology. Our solutions are designed to be accessible and impactful for businesses of all sizes, with flexible pricing and implementation options specifically for SMEs."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {smeFocusList.map((sme, index) => (
            <TabCard
              key={index}
              title={sme.title}
              description={sme.description}
              solutions={sme.solutions}
              linkLabel={sme.linkLabel}
              linkHref={sme.linkHref}
            />
          ))}
        </div>
      </PageLayout>

      {/* Testimonial */}
      <div className="bg-gray-soft">
        <PageLayout id="social-proof">
          <SectionHeader
            title="Real Results from Real Companies"
            subtitle="Here's how TruBot AI is driving success for businesses of all sizes"
          />

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonialList.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
              />
            ))}
          </div>
        </PageLayout>
      </div>

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Business with AI?"
        subtitle="Join hundreds of forward-thinking companies leveraging our AI solutions to drive efficiency, innovation, and growth."
        primaryCTA={{ label: "Request a Demo", href: "/request-demo" }}
        secondaryCTA={{ label: "Contact Our Team", href: "/contact" }}
      />
    </>
  );
};

export default Page;
