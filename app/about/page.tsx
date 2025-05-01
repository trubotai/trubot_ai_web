import PageLayout from "../ui/components/PageLayout";
import SectionHeader from "../ui/components/SectionHeader";
import OurStory from "../ui/components/AboutPage/OurStory";
import OurMission from "../ui/components/AboutPage/OurMission";
import OurApproach from "../ui/components/AboutPage/OurApproach";
import OurValues from "../ui/components/AboutPage/OurValues";
import ResponsibleAI from "../ui/components/AboutPage/ResponsibleAI";
import FinalCTASection from "../ui/components/FinalCTASection";
import {
  storyList,
  missionList,
  approachList,
  valueList,
  responsibilityList,
} from "../ui/libs/constants/about";

export const metadata = {
  title: "About – TruBot AI",
  description:
    "Discover how TruBot AI is making AI solutions accessible and transformative for businesses worldwide.",
};

const Page = () => {
  return (
    <>
      <PageLayout>
        <SectionHeader
          title="Pioneering the Future of AI for Business"
          subtitle="We're on a mission to make powerful AI solutions accessible, practical, and transformative for organizations of all sizes."
        />
      </PageLayout>

      <OurStory storyList={storyList} />

      <OurMission missionList={missionList} />

      <OurApproach approachList={approachList} />

      <OurValues valueList={valueList} />

      <ResponsibleAI responsibilityList={responsibilityList} />

      <FinalCTASection
        title="Ready to Explore AI for Your Business?"
        subtitle="Our team is here to help. Let’s discuss how we can transform your operations with powerful, accessible AI solutions."
        ctaLabel="Contact Our Team"
        ctaLink="/contact"
      />
    </>
  );
};

export default Page;
