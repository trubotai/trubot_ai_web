import Section from "../components/Section";
import Heading from "../components/Heading";
import CareersPageList from "../components/CareersPageList";

const CareersPage = () => {
  return (
    <Section className="overflow-hidden" id="careers">
      <div className="container relative z-2">
        <Heading
          title="Join the TruBot AI Team"
          text="Be part of a company that’s shaping the future of AI."
        />

        <div className="relative">
          <CareersPageList />
        </div>
      </div>
    </Section>
  );
};

export default CareersPage;
