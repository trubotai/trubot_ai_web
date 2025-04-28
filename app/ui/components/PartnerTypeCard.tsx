import Button from "./Button";

interface PartnerTypeCardProps {
  title: string;
  description: string;
  requirements: string[];
  benefits: string[];
  applyLabel: string;
  applyLink: string;
  delay?: number;
}

const PartnerTypeCard = ({
  title,
  description,
  requirements,
  benefits,
  applyLabel,
  applyLink,
  delay = 0,
}: PartnerTypeCardProps) => {
  return (
    <div
      className={`
        flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-8 
        transition-all duration-300 transform hover:scale-105 hover:border-electric hover:shadow-electric 
        animate-fade-slide-up
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="space-y-6">
        {/* Top Badge and Description */}
        <div className="space-y-2 text-center">
          <span className="inline-block text-xs uppercase tracking-wider text-electric bg-electric/10 px-3 py-1 rounded-full">
            {title}
          </span>

          <p className="text-gray-600">{description}</p>
        </div>

        {/* Requirements */}
        <div className="space-y-2">
          <h4 className="font-semibold text-navy">Requirements:</h4>
          <ul className="list-disc list-inside text-gray-600 text-sm">
            {requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="space-y-2">
          <h4 className="font-semibold text-navy">Benefits:</h4>
          <ul className="list-disc list-inside text-gray-600 text-sm">
            {benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Apply CTA */}
      <div className="pt-6 text-center">
        <Button
          href={applyLink}
          variant="primary"
          className="hover:opacity-90 animate-fade-scale animation-delay-300"
        >
          {applyLabel}
        </Button>
      </div>
    </div>
  );
};

export default PartnerTypeCard;
