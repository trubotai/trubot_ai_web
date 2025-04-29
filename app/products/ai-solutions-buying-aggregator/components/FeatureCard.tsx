import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  badge?: string;
  animationDelayClass?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  badge,
  animationDelayClass = "",
}: FeatureCardProps) => {
  return (
    <div
      className={`relative bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center animate-fade-slide-up font-sans ${animationDelayClass}`}
    >
      {badge?.trim() && (
        <span className="absolute top-4 right-4 bg-electric text-white text-xs font-semibold px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
      <div className="text-4xl mb-4 text-electric">{icon}</div>
      <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
