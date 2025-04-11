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

export default function ProductsPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="Explore Our AI Products"
        subtitle="Chatbots, voice assistants, and AI agents that power real business outcomes."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsList.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            description={product.description}
            icon={<span className="text-3xl">{product.icon}</span>}
            href={product.href}
          />
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          href="/contact"
          className="inline-block bg-electric text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Not sure what fits? Talk to our team
        </Link>
      </div>
    </PageLayout>
  );
}
