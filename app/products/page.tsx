import PageLayout from "../ui/components/PageLayout";
import SectionHeader from "../ui/components/SectionHeader";
import ProductCard from "../ui/components/ProductCard";
import Button from "../ui/components/Button";
import { productList } from "../ui/libs/constants/products";

export const metadata = {
  title: "Products – TruBot AI",
  description:
    "Explore TruBot AI’s suite of chat, voice, and agent automation tools.",
};

const Page = () => {
  return (
    <PageLayout>
      <SectionHeader
        title="All-in-One AI Solutions for Modern Businesses"
        subtitle="Supercharge your business with TruBot AI's powerful suite of AI chatbots, voice bots, agents, and automation tools.
Whether you want to automate customer support, scale marketing, manage invoicing, or grow your online presence, our ready-to-deploy solutions are built to drive results.
Trusted by businesses across industries, TruBot AI makes advanced AI accessible, affordable, and effective — so you can focus on growth, not guesswork."
      />

      <div className="space-y-20">
        {productList.map((group) => (
          <section key={group.id}>
            <h3 className="text-2xl font-bold text-navy mb-6 text-center">
              {group.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((product) => (
                <ProductCard
                  key={product.name}
                  title={product.name}
                  description={product.description}
                  href={product.href}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="text-center mt-16">
        <Button href="/contact">Not sure what fits? Talk to our team</Button>
      </div>
    </PageLayout>
  );
};

export default Page;
