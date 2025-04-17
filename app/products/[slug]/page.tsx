import { Metadata } from "next";
import { notFound } from "next/navigation";

import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import PlatformCard from "@/app/ui/components/PlatformCard";
import HowItWorksSteps from "@/app/ui/components/HowItWorksSteps";
import UseCasesGrid from "@/app/ui/components/UseCasesGrid";
import FinalCTASection from "@/app/ui/components/FinalCTASection";

import { productPagesMap } from "@/app/ui/libs/constants/productPage";
import { ProductPageData } from "@/app/ui/libs/types/productPage";

export async function generateStaticParams() {
  return Object.keys(productPagesMap).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = productPagesMap[slug] as ProductPageData;

  return {
    title: `${data?.title} – TruBot AI`,
    description: data?.description,
  };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = productPagesMap[slug] as ProductPageData;

  if (!data) return notFound();

  const { title, description, platforms, steps, industries } = data;

  return (
    <>
      {/* Overview Section */}
      <PageLayout>
        <SectionHeader title={title} subtitle={description} />

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {platforms.map((platform) => (
            <PlatformCard key={platform.name} {...platform} />
          ))}
        </section>
      </PageLayout>

      {/* How It Works Section */}
      <div className="bg-gray-50">
        <PageLayout className="py-20">
          <SectionHeader
            title="How It Works"
            subtitle="Launch AI-powered experiences in just a few easy steps."
          />

          <HowItWorksSteps steps={steps} />
        </PageLayout>
      </div>

      {/* Industries Section */}
      <PageLayout className="py-20">
        <SectionHeader
          title="Industries We Serve"
          subtitle="Flexible and scalable across diverse industries."
        />

        <UseCasesGrid industries={industries} />
      </PageLayout>

      {/* Final CTA Section */}
      <FinalCTASection
        title="See It in Action"
        subtitle="Talk to our team and discover what TruBot AI can do for your business."
        ctaLabel="Request Demo"
        ctaLink="/contact"
      />
    </>
  );
};

export default Page;
