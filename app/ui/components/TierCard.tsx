interface TierCardProps {
  title: string;
  description: string;
  benefits: string[];
  requirements: string[];
  highlight?: boolean;
  delay?: number;
}

const TierCard = ({
  title,
  description,
  benefits,
  requirements,
  highlight = false,
  delay = 0,
}: TierCardProps) => {
  return (
    <div
      className={`
        relative flex flex-col justify-between p-8 rounded-2xl
        border ${
          highlight
            ? "border-2 border-yellow-400 bg-yellow-50"
            : "border-gray-200 bg-white"
        }
        transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg
        animate-fade-slide-up
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Tier Badge */}
      {highlight && (
        <div className="absolute top-4 right-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full">
          ★ Gold Partner
        </div>
      )}

      <div className="space-y-4 text-center">
        <h3
          className={`text-2xl font-bold ${
            highlight ? "text-yellow-500" : "text-navy"
          }`}
        >
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div className="space-y-6 pt-6 text-left">
        <div className="space-y-2">
          <h4 className="font-semibold text-navy">Benefits:</h4>
          <ul className="list-disc list-inside text-gray-600 text-sm">
            {benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-navy">Requirements:</h4>
          <ul className="list-disc list-inside text-gray-600 text-sm">
            {requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TierCard;
