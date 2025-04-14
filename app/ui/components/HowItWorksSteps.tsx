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

  return (
    <div className={`mb-20 ${alignmentClass} ${className}`}>
      <ul
        className={`space-y-4 ${
          align === "center" ? "mx-auto max-w-lg" : ""
        } list-decimal pl-5 text-gray-700`}
      >
        {steps.map((step, i) => (
          <li key={i} className="text-base leading-relaxed">
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
}
