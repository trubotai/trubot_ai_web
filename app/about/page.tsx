import Link from "next/link";

import PageLayout from "../ui/components/PageLayout";
import SectionHeader from "../ui/components/SectionHeader";

export const metadata = {
  title: "About – TruBot AI",
  description:
    "Learn more about the team, mission, and story behind TruBot AI.",
};

const Page = () => {
  return (
    <PageLayout>
      <SectionHeader
        title="About TruBot AI"
        subtitle="Making AI accessible, actionable, and ROI-driven for small to mid-sized businesses."
      />

      <div className="max-w-3xl mx-auto space-y-16 text-gray-700">
        <section className="text-center">
          <h3 className="text-2xl font-bold text-navy mb-3">Our Mission</h3>
          <p className="leading-relaxed">
            Our mission is to revolutionize customer support and business
            communication through AI-powered solutions. From AI chatbots and
            voice-enabled bots to intelligent agents and social media tools, we
            equip businesses to scale while staying personal.
          </p>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-bold text-navy mb-3">Our Journey</h3>
          <p className="leading-relaxed">
            TruBot AI was founded by a visionary with 15+ years in AI and data
            science. With leadership experience at CitiBank and Fidelity, our
            founder brings deep domain expertise and a passion for solving
            real-world inefficiencies with smart technology.
          </p>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-bold text-navy mb-3">Our Approach</h3>
          <p className="leading-relaxed">
            We believe in automation that enhances—not replaces—human
            connection. Our tools help businesses deliver faster, smarter, and
            more personalized experiences across chat, voice, and digital
            platforms.
          </p>
        </section>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-electric text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
