import { FaChevronDown } from "react-icons/fa";

interface AccordionItemProps {
  isOpen: boolean;
  question: string;
  answer: string;
  onToggle: () => void;
  index: number;
}

const AccordionItem = ({
  isOpen,
  question,
  answer,
  onToggle,
  index,
}: AccordionItemProps) => {
  const contentId = `accordion-content-${index}`;
  const buttonId = `accordion-button-${index}`;

  return (
    <div className="bg-light rounded-lg shadow-md overflow-hidden transition-all duration-300">
      <button
        id={buttonId}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full flex justify-between items-center px-6 py-4 text-left text-navy font-heading font-medium focus:outline-none"
      >
        <span>{question}</span>
        <FaChevronDown
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180 text-electric" : "rotate-0"
          }`}
        />
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={`
          text-navy/80 font-body text-sm
          transition-all duration-300 ease-in-out px-6 pb-4
          ${isOpen ? "accordion-open" : "accordion-close"}
        `}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
