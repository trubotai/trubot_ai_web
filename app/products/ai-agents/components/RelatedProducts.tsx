import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import Button from "@/app/ui/components/Button";
import { productList } from "@/app/ui/libs/constants/products/ai-agents";

const RelatedProducts = () => {
  return (
    <PageLayout>
      <SectionHeader
        title="Related Products"
        subtitle="Explore more AI-powered tools to expand your automation strategy"
      />
      <div className="flex overflow-x-auto gap-6 pb-4 snap-x md:grid md:grid-cols-3 md:overflow-visible">
        {productList.map((product, index) => (
          <div
            key={index}
            className={`min-w-[280px] snap-start bg-gray-50 rounded-xl p-6 shadow-md transition-all hover-scale-glow animate-fade-slide-up ${
              product.featured
                ? "border-2 border-electric"
                : "border border-gray-200"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-electric/10 rounded-full text-electric shadow">
                <product.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-navy">
                {product.name}
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-6">{product.description}</p>
            <Button href={product.link} variant="ghost" animate>
              Learn More
            </Button>
          </div>
        ))}
      </div>

      {/* Global CTA */}
      <div className="text-center mt-12 animate-fade-in">
        <Button href="/products" variant="primary" animate>
          See All Products
        </Button>
      </div>
    </PageLayout>
  );
};

export default RelatedProducts;
