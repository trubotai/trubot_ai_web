import { Metadata } from "next";
import { notFound } from "next/navigation";

import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import PlatformCard from "@/app/ui/components/PlatformCard";
import HowItWorksSteps from "@/app/ui/components/HowItWorksSteps";
import UseCasesGrid from "@/app/ui/components/UseCasesGrid";
import FinalCTASection from "@/app/ui/components/FinalCTASection";

import { productPagesMap } from "@/app/ui/libs/constants/productPage";
import { ProductPageDataType } from "@/app/ui/libs/types/productPage";

export async function generateStaticParams() {
  return Object.keys(productPagesMap).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = productPagesMap[slug] as ProductPageDataType;

  return {
    title: `${data?.title} – TruBot AI`,
    description: data?.description,
  };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = productPagesMap[slug] as ProductPageDataType;

  if (!data) return notFound();

  const { title, description, platforms, steps, industries } = data;

  return (
    <>
      {/* Overview Section */}
      <PageLayout className="animate-fade-in">
        <SectionHeader title={title} subtitle={description} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className={`animate-fade-slide-up animation-delay-${
                (index + 1) * 100
              }`}
            >
              <PlatformCard {...platform} />
            </div>
          ))}
        </div>
      </PageLayout>

      {/* How It Works Section */}
      <div className="bg-gray-50">
        <PageLayout className="py-20 animate-fade-in">
          <SectionHeader
            title="How It Works"
            subtitle="Launch AI-powered experiences in just a few easy steps."
          />

          <HowItWorksSteps steps={steps} />
        </PageLayout>
      </div>

      {/* Industries Section */}
      <PageLayout className="py-20 animate-fade-in">
        <SectionHeader
          title="Industries We Serve"
          subtitle="Flexible and scalable across diverse industries."
        />

        <UseCasesGrid industries={industries} />
      </PageLayout>

      {/* Final CTA */}
      <FinalCTASection
        title="See It in Action"
        subtitle="Talk to our team and discover what TruBot AI can do for your business."
        ctaLabel="Request Demo"
        ctaLink="/contact"
        className="animate-fade-in"
      />
    </>
  );
};

export default Page;
