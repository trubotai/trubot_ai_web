interface UseCasesGridProps {
  industries: string[];
  align?: "center" | "left" | "right";
  className?: string;
}

const UseCasesGrid = ({
  industries,
  align = "center",
  className = "",
}: UseCasesGridProps) => {
  const alignmentMap = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <div className={`mb-20 ${alignmentMap[align]} ${className}`}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {industries.map((industry, index) => (
          <div
            key={industry}
            className={`
              group relative overflow-hidden rounded-xl p-6 bg-white 
              border border-gray-200 shadow-sm 
              transition-all duration-300 hover:-translate-y-1 hover:shadow-md 
              animate-fade-slide-up animation-delay-${(index + 1) * 100}
            `}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-electric to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <p className="text-sm font-semibold text-navy">{industry}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCasesGrid;
