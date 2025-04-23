interface CareerListSectionProps {
  heading: string;
  items: string[];
  className?: string;
}

const CareerListSection = ({
  heading,
  items,
  className = "",
}: CareerListSectionProps) => {
  return (
    <section className={`mb-12 animate-fade-slide-up ${className}`}>
      <h3 className="text-2xl font-bold text-navy mb-4">{heading}</h3>

      <ul className="list-disc list-inside space-y-3 text-gray-700">
        {items.map((item, idx) => (
          <li
            key={idx}
            className={`leading-relaxed transition-transform duration-300 hover:translate-x-1`}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CareerListSection;
