import PageLayout from "../PageLayout";
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";
import Button from "../Button";
import { homePageProductsList } from "../../libs/constants/products";

const Products = () => {
  return (
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
  );
};

export default Products;
