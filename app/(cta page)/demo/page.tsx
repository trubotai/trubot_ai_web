import CheckList from "@/app/ui/components/shared/CheckList";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Link from "next/link";
import { FaSearch, FaHandshake, FaCommentDots } from "react-icons/fa";

const demoExpectations = [
  "✅ Response within 24 hours – Our team will get back to you quickly — no waiting around.",
  "🎯 Tailored to your needs – We'll customize the walkthrough based on your business and goals.",
  "💬 No pressure, just insights – It's a demo, not a sales trap. Ask anything, explore everything.",
];

const fallbackOptions = [
  {
    icon: FaSearch,
    title: "Learn About Our Products",
    description:
      "See what TruChat, TruVoice, and TruAgent can do for your business.",
    href: "/products",
  },
  {
    icon: FaHandshake,
    title: "Talk to Sales Instead",
    description: "Want to discuss your needs before a demo?",
    href: "/sales",
  },
  {
    icon: FaCommentDots,
    title: "General Questions?",
    description: "Reach out to our team with any other queries.",
    href: "/contact",
  },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Let’s Schedule Your Personalized Demo"
        subtitle="See how TruBot AI can automate your support, boost conversions, and save time — tailored just for your business."
        alignment="center"
        primaryCTA={{
          label: "Request a Demo",
          href: "mailto:contact@trubotai.com?subject=Demo%20Request&body=Hi%20TruBot%20AI%2C%0A%0AI’d%20like%20to%20request%20a%20demo%20of%20your%20AI%20solutions.%20Here’s%20a%20bit%20about%20my%20business%3A%0A%0A-%20Name%3A%0A-%20Company%3A%0A-%20Industry%3A%0A-%20What%20I%20want%20to%20automate%3A%0A%0ALooking%20forward%20to%20hearing%20from%20you!",
        }}
      />

      {/* Next Steps */}
      <div className="bg-gray-soft">
        <PageLayout id="demo-followup">
          <SectionHeader
            title="What to Expect After You Hit Send"
            subtitle="We make the demo process easy, fast, and focused on what matters to you."
          />

          <div className="mt-10 max-w-3xl mx-auto">
            <CheckList items={demoExpectations} columns={1} />
          </div>
        </PageLayout>
      </div>

      <PageLayout id="demo-fallback">
        <SectionHeader
          title="Not Sure Yet? Explore More Before Booking"
          subtitle="We get it — making the right decision takes time. Feel free to explore other options before scheduling your demo."
        />

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 mt-12">
          {fallbackOptions.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex flex-col items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all fade-in slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-electric/10 rounded-full">
                <item.icon className="text-electric w-6 h-6" />
              </div>
              <h4 className="text-navy font-heading font-semibold text-lg mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-navy/70 font-body">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </PageLayout>
    </>
  );
};

export default Page;
