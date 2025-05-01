interface Benefit {
  icon: React.ElementType;
  text: string;
}

interface BenefitCard {
  audience: string;
  subtitle: string;
  benefits: Benefit[];
  bgClass?: string;
}

const BenefitCard = ({
  audience,
  subtitle,
  benefits,
  bgClass = "bg-light",
}: BenefitCard) => {
  return (
    <div
      className={`rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ${bgClass}`}
    >
      <h4 className="text-xl font-heading font-semibold text-navy mb-2">
        {audience}
      </h4>
      <p className="text-sm text-navy/80 mb-4 font-body">{subtitle}</p>

      <ul className="space-y-3">
        {benefits.map((benefit, idx) => {
          const Icon = benefit.icon;
          return (
            <li key={idx} className="flex items-start text-navy font-body">
              <Icon className="w-5 h-5 text-electric mt-1 mr-2 shrink-0" />
              <span>{benefit.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BenefitCard;
