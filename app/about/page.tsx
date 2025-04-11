import Link from "next/link";

import PageLayout from "../ui/components/PageLayout";
import SectionHeader from "../ui/components/SectionHeader";

export const metadata = {
  title: "About – TruBot AI",
  description:
    "Learn more about the team, mission, and story behind TruBot AI.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <SectionHeader
        title="About TruBot AI"
        subtitle="Making AI accessible, actionable, and ROI-driven for small to mid-sized businesses."
      />

      <div className="space-y-10 text-gray-700">
        <div>
          <h3 className="text-xl font-semibold text-navy mb-2">Our Mission</h3>

          <p>
            We believe that powerful AI shouldn’t be limited to large
            enterprises. TruBot AI empowers growing businesses with intelligent,
            easy-to-use automation tools across chat, voice, and multi-agent
            workflows.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-navy mb-2">Our Journey</h3>

          <p>
            Born out of the need for unified automation across support, sales,
            and marketing — TruBot AI combines years of product research and
            hands-on implementation into a single, plug-and-play platform.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-navy mb-2">Our Approach</h3>

          <p>
            We combine proven AI tools with seamless workflows — from WhatsApp
            to web to phone. Whether it’s resolving queries or generating leads,
            we help teams achieve more with less.
          </p>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block bg-electric text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
