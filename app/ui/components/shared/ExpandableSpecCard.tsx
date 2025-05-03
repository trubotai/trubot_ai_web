import { ChevronDown } from "lucide-react";

interface ExpandableSpecCardProps {
  icon: React.ElementType;
  title: string;
  items: string[];
  bgClass?: string;
  isOpen: boolean;
  onToggle: () => void;
  index?: number;
}

const ExpandableSpecCard = ({
  icon: Icon,
  title,
  items,
  bgClass = "bg-light",
  isOpen,
  onToggle,
  index = 0,
}: ExpandableSpecCardProps) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow transition-all fade-in slide-in-up ${bgClass}`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left group"
      >
        <div className="flex items-center gap-4">
          <div className="bg-electric/10 text-electric p-2 rounded-full">
            <Icon size={22} />
          </div>
          <h3 className="text-lg text-navy font-semibold font-heading">
            {title}
          </h3>
        </div>

        <ChevronDown
          className={`text-electric transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`transition-all px-6 ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        } overflow-hidden`}
      >
        <ul className="list-disc list-inside text-sm text-navy/80 space-y-2 pl-1">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpandableSpecCard;
