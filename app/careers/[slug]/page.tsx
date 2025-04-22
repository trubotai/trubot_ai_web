import { Metadata } from "next";
import { notFound } from "next/navigation";

import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import CareerIntro from "@/app/ui/components/CareerPage/CareerIntro";
import CareerSection from "@/app/ui/components/CareerPage/CareerSection";
import CareerListSection from "@/app/ui/components/CareerPage/CareerListSection";
import CareerApplyCTA from "@/app/ui/components/CareerPage/CareerApplyCTA";

import { careerPagesMap } from "@/app/ui/libs/constants/careersPage";
import { CareerPageData } from "@/app/ui/libs/types/careerPage";

export async function generateStaticParams() {
  return Object.keys(careerPagesMap).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = careerPagesMap[slug] as CareerPageData;

  return {
    title: `${data?.title} – TruBot AI`,
    description: data?.shortDescription,
  };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data: CareerPageData = careerPagesMap[slug] as CareerPageData;

  if (!data) return notFound();

  const {
    title,
    location,
    type,
    about,
    roleIntro,
    responsibilities,
    qualifications,
    benefits,
    applyInstructions,
    applyEmail,
    applyCC,
    applyLink,
  } = data;

  return (
    <PageLayout>
      <SectionHeader title={title} />
      <CareerIntro location={location} type={type} />

      <div className="prose prose-gray max-w-none mb-12">
        <CareerSection heading="Who are we?" content={about} />
        <CareerSection heading="Who are we looking for?" content={roleIntro} />
        <CareerListSection
          heading="Key Responsibilities"
          items={responsibilities}
        />
        <CareerListSection
          heading="Qualifications & Attributes"
          items={qualifications}
        />
        <CareerListSection heading="Why Join Us?" items={benefits} />
      </div>

      <CareerApplyCTA
        instructions={applyInstructions}
        applyEmail={applyEmail}
        applyCC={applyCC}
        applyLink={applyLink}
      />
    </PageLayout>
  );
};

export default Page;
