import Link from "next/link";

interface CareerCardProps {
  title: string;
  location: string;
  type: string;
  href?: string;
}

export default function CareerCard({
  title,
  location,
  type,
  href = "#",
}: CareerCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-bold text-navy mb-1">{title}</h3>

      <p className="text-sm text-gray-500 mb-2">
        {location} · {type}
      </p>

      <Link
        href={href}
        className="text-electric text-sm font-medium hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply Now →
      </Link>
    </div>
  );
}
