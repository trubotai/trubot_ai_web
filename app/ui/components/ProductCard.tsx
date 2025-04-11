interface ProductCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
}

export default function ProductCard({
  title,
  description,
  icon,
  href = "#",
}: ProductCardProps) {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 text-left hover:shadow-md transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={href} className="text-electric font-medium hover:underline">
        Learn More →
      </a>
    </div>
  );
}
