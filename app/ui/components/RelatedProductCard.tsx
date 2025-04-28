import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface RelatedProductCardProps {
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  icon?: React.ReactNode;
  delay?: number;
}

const RelatedProductCard = ({
  title,
  description,
  linkLabel,
  linkHref,
  icon,
  delay = 0,
}: RelatedProductCardProps) => {
  return (
    <div
      className="flex flex-col justify-between bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform animate-fade-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="space-y-6">
        {/* Icon */}
        {icon && (
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-electric/10 text-electric text-3xl mb-4">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold text-navy">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Learn More Link */}
      <div className="pt-6 text-left">
        <Link
          href={linkHref}
          className="inline-flex items-center gap-2 text-electric font-semibold hover:gap-3 transition-all group"
        >
          {linkLabel}
          <FaArrowRight className="text-electric transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default RelatedProductCard;
