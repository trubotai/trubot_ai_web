import { Metadata } from "next";
import { JSX } from "react";
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

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const data = productPagesMap[slug] as ProductPageData;

  return {
    title: `${data?.title} – TruBot AI`,
    description: data?.description,
  };
}

const Page = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  const data: ProductPageData = productPagesMap[slug] as ProductPageData;

  if (!data) return notFound();

  const { title, description, platforms, steps, industries } = data;

  return (
    <>
      <PageLayout>
        <SectionHeader title={title} subtitle={description} />

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {platforms.map(
            (
              platform: JSX.IntrinsicAttributes & {
                name: string;
                feature: string;
                icon?: React.ReactNode;
              }
            ) => (
              <PlatformCard key={platform.name} {...platform} />
            )
          )}
        </section>
      </PageLayout>

      {/* How It Works */}
      <div className="bg-gray-50">
        <PageLayout className="py-20">
          <SectionHeader
            title="How It Works"
            subtitle="Launch AI chatbots without writing a single line of code."
          />

          <HowItWorksSteps steps={steps} />
        </PageLayout>
      </div>

      <PageLayout className="py-20">
        <SectionHeader
          title="Industries Using AI Chatbots"
          subtitle="Our technology adapts to your domain."
        />

        <UseCasesGrid industries={industries} />
      </PageLayout>

      {/* Final CTA */}
      <FinalCTASection
        title="See AI Chatbots in Action"
        subtitle="Book a live demo and discover what TruBot AI can do for your business."
        ctaLabel="Talk to Our Team"
        ctaLink="/contact"
      />
    </>
  );
};

export default Page;
