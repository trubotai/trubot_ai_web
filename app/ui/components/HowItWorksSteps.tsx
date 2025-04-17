interface HowItWorksStepsProps {
  steps: string[];
  align?: "center" | "left" | "right";
  className?: string;
}

export default function HowItWorksSteps({
  steps,
  align = "center",
  className = "",
}: HowItWorksStepsProps) {
  const alignmentClass =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  const wrapperClass = align === "center" ? "mx-auto max-w-2xl" : "max-w-3xl";

  return (
    <div className={`mb-20 ${alignmentClass} ${className}`}>
      <ul
        className={`list-decimal pl-6 space-y-6 text-gray-700 ${wrapperClass}`}
      >
        {steps.map((step, index) => (
          <li
            key={index}
            className="text-base leading-relaxed hover:translate-x-1 transition-transform duration-300"
          >
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
}
