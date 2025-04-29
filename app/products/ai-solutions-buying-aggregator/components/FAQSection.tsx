import PageLayout from "@/app/ui/components/PageLayout";
import SectionHeader from "@/app/ui/components/SectionHeader";
import FAQItem from "@/app/ui/components/FAQEle";
import { faqList } from "@/app/ui/libs/constants/productPage/ai-solutions-buying-aggregator";

const FAQSection = () => {
  return (
    <div className="bg-gray-soft">
      <PageLayout>
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about how our platform simplifies your AI solution journey."
        />

        <div className="space-y-6">
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
