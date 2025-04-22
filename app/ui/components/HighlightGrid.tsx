interface HighlightGridProps {
  items: { title: string; description: string }[];
}

const HighlightGrid = ({ items }: HighlightGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover-scale-glow animate-fade-slide-up animation-delay-${
            (idx + 1) * 100
          }`}
        >
          <h4 className="text-lg font-semibold text-navy mb-2">{item.title}</h4>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HighlightGrid;
