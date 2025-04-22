interface CareerSectionProps {
  heading: string;
  content: string;
}

const CareerSection = ({ heading, content }: CareerSectionProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-navy mb-3">{heading}</h2>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </section>
  );
};

export default CareerSection;
