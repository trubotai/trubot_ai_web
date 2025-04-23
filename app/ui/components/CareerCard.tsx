import Link from "next/link";

interface CareerCardProps {
  title: string;
  location: string;
  type: string;
  href?: string;
}

const CareerCard = ({ title, location, type, href = "#" }: CareerCardProps) => {
  return (
    <div
      className="
        bg-white border border-gray-200 rounded-xl p-6
        shadow-sm hover-pop-glow
        flex flex-col justify-between
        transition-all duration-300 animate-fade-slide-up
      "
    >
      <div>
        <h3 className="text-lg font-bold text-navy mb-1">{title}</h3>

        <p className="text-sm text-gray-500 mb-4">
          {location} · {type}
        </p>
      </div>

      <Link
        href={href}
        className="text-electric text-sm font-semibold transition-colors duration-300 hover:text-blue-700 mt-auto"
        aria-label={`Apply for ${title}`}
      >
        Apply Now →
      </Link>
    </div>
  );
};

export default CareerCard;
