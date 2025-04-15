interface UseCasesGridProps {
  industries: string[];
  align?: "center" | "left" | "right";
  className?: string;
}

export default function UseCasesGrid({
  industries,
  align = "center",
  className = "",
}: UseCasesGridProps) {
  const alignmentClass =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  return (
    <div className={`mb-20 ${alignmentClass} ${className}`}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
        {industries.map((industry) => (
          <div
            key={industry}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm font-medium text-navy">{industry}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
