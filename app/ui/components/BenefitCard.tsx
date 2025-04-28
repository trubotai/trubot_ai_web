interface BenefitCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
}

const BenefitCard = ({
  title,
  description,
  icon,
  delay = 0,
}: BenefitCardProps) => {
  return (
    <div
      className={`
        flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl p-6
        transition-all duration-300 transform hover:scale-105 hover:border-electric hover:shadow-electric
        animate-fade-slide-up
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {icon && (
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-electric/10 text-electric text-3xl">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>

      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default BenefitCard;
