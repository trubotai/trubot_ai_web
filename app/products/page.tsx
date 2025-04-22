import Link from "next/link";

import PageLayout from "../ui/components/PageLayout";
import SectionHeader from "../ui/components/SectionHeader";
import ProductCard from "../ui/components/ProductCard";
import { productsList } from "../ui/libs/constants/products";

export const metadata = {
  title: "Products – TruBot AI",
  description:
    "Explore TruBot AI’s suite of chat, voice, and agent automation tools.",
};

const Page = () => {
  return (
    <PageLayout>
      <SectionHeader
        title="Explore Our AI Products"
        subtitle="AI chatbots, voice bots, multi-agent systems, and productivity tools — all tailored for your business growth."
      />

      <div className="space-y-20">
        {productsList.map((group) => (
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
        <Link
          href="/contact"
          className="inline-block bg-electric text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Not sure what fits? Talk to our team
        </Link>
      </div>
    </PageLayout>
  );
};

export default Page;
