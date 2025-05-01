import { CheckCircle } from "lucide-react";

interface UseCaseCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  results: string[];
  index?: number;
}

const UseCaseCard = ({
  icon: Icon,
  title,
  subtitle,
  description,
  results,
  index = 0,
}: UseCaseCardProps) => {
  return (
    <div
      className={`p-8 rounded-xl shadow-md transition-all duration-300 transform bg-light fade-in slide-in-up hover-scale hover-glow`}
      style={{ animationDelay: `${index * 100}ms` }}
      role="region"
      aria-labelledby={`use-case-${index}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-6 h-6 text-electric shrink-0" />
        <h3
          id={`use-case-${index}`}
          className="text-2xl font-heading font-semibold text-navy"
        >
          {title}
        </h3>
      </div>

      <p className="text-electric font-medium mb-2">{subtitle}</p>
      <p className="text-navy/80 font-body mb-6">{description}</p>

      <ul className="space-y-2">
        {results.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-navy/70 font-body"
          >
            <CheckCircle size={16} className="text-teal mt-0.5 shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseCaseCard;
