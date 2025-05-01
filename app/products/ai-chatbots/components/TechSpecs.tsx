import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import { Settings2, Dot } from "lucide-react";

const specBlocks = [
  {
    title: "Conversational AI Technology",
    specs: [
      "Natural Language Processing: State-of-the-art NLP with 95%+ intent recognition accuracy",
      "Context Management: Maintains conversation context across multiple turns and sessions",
      "Sentiment Analysis: Real-time emotion detection to adapt tone and responses",
      "Multi-language Support: 30+ languages with native-level understanding",
    ],
  },
  {
    title: "Integration Capabilities",
    specs: [
      "Website Integration: Simple JavaScript snippet or WordPress plugin",
      "Mobile SDK: Native SDKs for iOS and Android applications",
      "Messaging Platforms: Ready-to-use integrations with Facebook Messenger, WhatsApp, Telegram, and more",
      "Business Systems: Connect to CRM, e-commerce, ticketing, and knowledge base systems",
    ],
  },
  {
    title: "Customization Options",
    specs: [
      "Visual Builder: No-code conversation designer for business users",
      "Advanced Customization: Developer tools for complex use cases",
      "Appearance Editor: Brand-aligned visual customization",
      "Analytics Dashboard: Comprehensive insights and performance metrics",
    ],
  },
  {
    title: "Security and Compliance",
    specs: [
      "Enterprise-grade Security: SOC 2 Type II certified",
      "Data Protection: GDPR and CCPA compliant",
      "Encryption: End-to-end encryption for all conversations",
      "Data Residency: Regional hosting options for regulatory compliance",
    ],
  },
];

const TechnicalSpecsSection = () => {
  return (
    <div className="bg-white py-20">
      <PageLayout>
        <SectionHeader
          title="Technical Specifications"
          subtitle="Built for enterprise-grade performance, security, and flexibility"
        />

        <div className="grid gap-10 sm:grid-cols-2">
          {specBlocks.map((block, idx) => (
            <div
              key={block.title}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md hover:bg-gray-100 transition-all animate-fade-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center bg-electric bg-opacity-10 text-electric rounded-full border border-electric/20">
                  <Settings2 size={16} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-navy">
                  {block.title}
                </h3>
              </div>

              {/* Bullet List */}
              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                {block.specs.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Dot size={18} className="text-electric" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default TechnicalSpecsSection;
