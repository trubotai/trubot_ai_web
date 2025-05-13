import CheckList from "@/app/ui/components/shared/CheckList";
import HeroSection from "@/app/ui/components/shared/HeroSection";
import PageLayout from "@/app/ui/components/shared/PageLayout";
import SectionHeader from "@/app/ui/components/shared/SectionHeader";
import Link from "next/link";
import { FaBoxOpen, FaCalendarAlt, FaCommentDots } from "react-icons/fa";

const items = [
  "🕐 Reply within 24 hours – A real person from our team will respond promptly — no bots here (ironically).",
  "🎯 Tailored Recommendations – We’ll suggest the best solution based on your goals, team size, and industry.",
  "🚀 Free Product Walkthrough – If it’s a fit, we’ll guide you through exactly how TruBot AI works — no commitments required.",
];

const options = [
  {
    icon: FaBoxOpen,
    title: "Explore Products",
    description:
      "Dive deeper into what TruChat, TruVoice, and TruAgent can do.",
    href: "/products",
  },
  {
    icon: FaCalendarAlt,
    title: "Book a Demo",
    description: "Want to see TruBot AI in action? Let us show you.",
    href: "/demo",
  },
  {
    icon: FaCommentDots,
    title: "General Inquiries",
    description: "Got questions that aren't sales-related? Reach out anytime.",
    href: "/contact",
  },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Let’s Talk About Growing Your Business with AI"
        subtitle="Have questions, need a custom solution, or want to see what TruBot AI can do for you? We’d love to hear from you."
        alignment="center"
        primaryCTA={{
          label: "Contact Our Sales Team",
          href: "mailto:sales@trubotai.com?subject=TruBot%20AI%20Sales%20Inquiry&body=Hi%20TruBot%20AI%2C%0A%0AI’m%20interested%20in%20learning%20more%20about%20your%20AI%20solutions.%20Here’s%20what%20I’m%20looking%20for...%0A%0A-%20Name%3A%0A-%20Company%3A%0A-%20Use%20Case%20or%20Pain%20Point%3A%0A%0ALooking%20forward%20to%20hearing%20from%20you!",
        }}
      />

      {/* Next Steps */}
      <div className="bg-gray-soft">
        <PageLayout id="next-steps">
          <SectionHeader
            title="What to Expect After You Email Us"
            subtitle="You're just one email away from unlocking your AI advantage. Here’s what happens next:"
          />

          <div className="mt-10 max-w-4xl mx-auto">
            <CheckList items={items} columns={1} />
          </div>
        </PageLayout>
      </div>

      {/* More Info */}
      <PageLayout id="explore-more">
        <SectionHeader
          title="Not Ready to Talk Yet?"
          subtitle="Explore more about TruBot AI at your own pace. When you're ready, we’ll be here."
        />

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 mt-12">
          {options.map((item, index) => (
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
