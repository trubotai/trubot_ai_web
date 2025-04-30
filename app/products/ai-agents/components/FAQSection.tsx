import FAQItem from "@/app/ui/components/FAQEle";
import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import { faqList } from "@/app/ui/libs/constants/products/ai-agents";

const FAQSection = () => {
  return (
    <div className="bg-gray-soft">
      <PageLayout>
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="All the answers you need about our AI agents"
        />

        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              delay={index * 100}
            />
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default FAQSection;
