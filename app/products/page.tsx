import PageLayout from "../ui/components/shared/PageLayout";
import ProductCard from "../ui/components/shared/ProductCard";
import HeroSection from "../ui/components/shared/HeroSection";
import CTASection from "../ui/components/shared/CTASection";
import {
  heroSection,
  productList,
  ctaSection,
} from "../ui/libs/constants/products";

export const metadata = {
  title: "Products – TruBot AI",
  description:
    "Explore TruBot AI’s suite of chat, voice, and agent automation tools.",
};

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection {...heroSection} />

      {/* Product List */}
      <PageLayout id="products">
        <div className="space-y-20">
          {productList.map((group) => (
            <section key={group.id}>
              <h3 className="text-2xl font-bold text-navy mb-6 text-center">
                {group.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in slide-in-up">
                {group.items.map((product) => (
                  <ProductCard
                    key={product.name}
                    title={product.name}
                    description={product.description}
                    link={product.href}
                    icon={product.icon}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </PageLayout>

      {/* CTA */}
      <CTASection {...ctaSection} />
    </>
  );
};

export default Page;
