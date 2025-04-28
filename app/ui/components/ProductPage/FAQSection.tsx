import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";
import FAQItem from "../FAQEle";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
  return (
    <div className="bg-gray-50">
      <PageLayout>
        {/* Section Header */}
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about joining our Partner Program."
        />

        {/* FAQ Items */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
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
