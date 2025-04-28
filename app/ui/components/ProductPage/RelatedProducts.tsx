import { FaStore, FaSearch, FaRobot } from "react-icons/fa";

import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";
import RelatedProductCard from "../RelatedProductCard";

interface RelatedProduct {
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

// Mapping title to icons
const iconMap: Record<string, React.ReactNode> = {
  "AI Marketplace": <FaStore />,
  "Strategic Sourcing for SMEs": <FaSearch />,
  "AI Agents": <FaRobot />,
};

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  return (
    <PageLayout>
      {/* Section Header */}
      <SectionHeader
        title="Related Products"
        subtitle="Discover more AI-powered solutions to help your clients succeed."
      />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <RelatedProductCard
            key={index}
            title={product.title}
            description={product.description}
            linkLabel={product.linkLabel}
            linkHref={product.linkHref}
            icon={iconMap[product.title] ?? undefined}
            delay={index * 100} 
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default RelatedProducts;
