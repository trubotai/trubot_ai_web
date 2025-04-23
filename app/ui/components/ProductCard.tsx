import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string; // For animation delay classes or custom styling
}

const ProductCard = ({
  title,
  description,
  icon,
  href = "#",
  className = "",
}: ProductCardProps) => {
  return (
    <div
      className={`group bg-white border border-gray-200 shadow-sm rounded-xl p-6 text-left transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-md hover-pop-glow ${className}`}
    >
      {icon && (
        <div className="text-4xl mb-4 text-electric group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>

      <p className="text-gray-600 mb-6">{description}</p>

      <Link
        href={href}
        className="text-electric text-sm font-semibold hover:text-blue-700 transition-colors"
      >
        Learn More →
      </Link>
    </div>
  );
};

export default ProductCard;
