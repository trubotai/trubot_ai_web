interface CareerSectionProps {
  heading: string;
  content: string;
  className?: string;
}

const CareerSection = ({
  heading,
  content,
  className = "",
}: CareerSectionProps) => {
  return (
    <section className={`mb-12 ${className}`}>
      <h3 className="text-2xl font-bold text-navy mb-4">{heading}</h3>

      <p className="text-gray-700 leading-relaxed">{content}</p>
    </section>
  );
};

export default CareerSection;
