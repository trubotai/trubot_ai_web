import PageLayout from "./ui/components/PageLayout";
import SectionHeader from "./ui/components/SectionHeader";
import ProductCard from "./ui/components/ProductCard";
import Button from "./ui/components/Button";
import { homePageProductsList } from "./ui/libs/constants/products";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
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
            <Button href="/contact" variant="outline">
              Request Demo
            </Button>
          </div>
        </div>
      </PageLayout>

      {/* Product Highlights */}
      <div className="bg-gray-50">
        <PageLayout>
          <SectionHeader
            title="Our AI Product Suite"
            subtitle="AI tools built for your team’s productivity — and your customer’s satisfaction."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homePageProductsList.map((product) => (
              <ProductCard
                key={product.name}
                title={product.name}
                description={product.description}
                href={product.href}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button href="/products" variant="ghost">
              See all products →
            </Button>
          </div>
        </PageLayout>
      </div>

      {/* Key Benefits */}
      <PageLayout>
        <SectionHeader
          title="Why Teams Choose TruBot AI"
          subtitle="We help you save time, boost performance, and scale without limits."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-2">💸</div>
            <h4 className="font-semibold text-navy mb-1">
              Reduce Support Costs
            </h4>
            <p className="text-sm text-gray-600">
              Automate up to 80% of common queries with no-code chat and voice
              flows.
            </p>
          </div>

          <div>
            <div className="text-4xl mb-2">⚙️</div>
            <h4 className="font-semibold text-navy mb-1">
              Automate Repetitive Tasks
            </h4>
            <p className="text-sm text-gray-600">
              Free your team from FAQ hell, follow-ups, and manual data entry.
            </p>
          </div>

          <div>
            <div className="text-4xl mb-2">📈</div>
            <h4 className="font-semibold text-navy mb-1">Get Real ROI on AI</h4>
            <p className="text-sm text-gray-600">
              Launch in days, not weeks — with measurable results from Day 1.
            </p>
          </div>
        </div>
      </PageLayout>

      {/* Industries We Help */}
      <div className="bg-gray-50">
        <PageLayout>
          <SectionHeader
            title="Industries We Help"
            subtitle="Whether you sell products, manage clients, or provide services — we’ve got you covered."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="text-xl">💻</p>
              <p className="mt-2 text-sm font-medium text-navy">Tech & SaaS</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="text-xl">🎨</p>
              <p className="mt-2 text-sm font-medium text-navy">
                Digital Agencies
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="text-xl">🛍️</p>
              <p className="mt-2 text-sm font-medium text-navy">eCommerce</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <p className="text-xl">🏥</p>
              <p className="mt-2 text-sm font-medium text-navy">Healthcare</p>
            </div>
          </div>
        </PageLayout>
      </div>

      {/* Testimonials */}
      <PageLayout>
        <SectionHeader
          title="What Our Customers Say"
          subtitle="We’re just getting started — but here’s what early adopters are saying."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-sm italic">
              “TruBot AI helped us reduce inbound calls by 40% — and gave our
              support team their evenings back.”
            </p>
            <p className="mt-2 text-sm font-semibold text-navy">
              — Samir, Founder @ SaaSBox
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-sm italic">
              “Setup took less than an hour, and our AI agent closed 3 deals in
              the first week. Unreal.”
            </p>
            <p className="mt-2 text-sm font-semibold text-navy">
              — Rina, Growth Lead @ SparkAgency
            </p>
          </div>
        </div>
      </PageLayout>

      {/* Final CTA */}
      <section className="bg-navy py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to See TruBot AI in Action?
        </h2>

        <p className="text-gray-300 mb-8">
          Book a demo and let our team help you explore what’s possible.
        </p>

        <Button
          href="/contact"
          variant="primary"
          className="bg-white text-navy hover:bg-gray-100"
        >
          Talk to Our Team
        </Button>
      </section>
    </>
  );
};

export default Page;
