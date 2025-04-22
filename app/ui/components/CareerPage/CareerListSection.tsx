interface CareerListSectionProps {
  heading: string;
  items: string[];
}

const CareerListSection = ({ heading, items }: CareerListSectionProps) => {
  return (
    <section className="mb-12">
      <h3 className="text-xl font-bold text-navy mb-3">{heading}</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default CareerListSection;
