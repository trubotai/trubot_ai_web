import {
  FaBullseye,
  FaLightbulb,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

interface StoryCardProps {
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  linkLabel: string;
  linkHref: string;
  delay?: number;
}

const StoryCard = ({
  title,
  challenge,
  solution,
  results,
  linkLabel,
  linkHref,
  delay = 0,
}: StoryCardProps) => {
  return (
    <div
      className={`
        flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-8 
        shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300
        animate-fade-slide-up
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="space-y-6">
        {/* Title */}
        <div className="space-y-2 text-center">
          <h3 className="text-2xl font-bold text-navy">{title}</h3>
        </div>

        {/* Details */}
        <div className="space-y-6 text-left">
          {/* Challenge */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <FaBullseye className="text-electric" />
              <h4 className="font-semibold text-navy">Challenge:</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{challenge}</p>
          </div>

          {/* Solution */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <FaLightbulb className="text-electric" />
              <h4 className="font-semibold text-navy">Solution:</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{solution}</p>
          </div>

          {/* Results */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <FaChartLine className="text-electric" />
              <h4 className="font-semibold text-navy">Results:</h4>
            </div>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              {results.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="pt-6 text-center">
        <Link
          href={linkHref}
          className="inline-flex items-center gap-2 text-electric font-semibold hover:gap-3 transition-all"
        >
          {linkLabel}
          <FaArrowRight className="text-electric" />
        </Link>
      </div>
    </div>
  );
};

export default StoryCard;
