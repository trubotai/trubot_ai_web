interface HowItWorksStepsProps {
  steps: string[];
  align?: "center" | "left" | "right";
  className?: string;
}

const HowItWorksSteps = ({
  steps,
  align = "center",
  className = "",
}: HowItWorksStepsProps) => {
  const alignment = {
    center: "text-center mx-auto max-w-2xl",
    left: "text-left max-w-3xl",
    right: "text-right max-w-3xl ml-auto",
  };

  return (
    <div className={`mb-20 ${alignment[align]} ${className}`}>
      <ul className="list-decimal pl-6 space-y-6 text-gray-700">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`text-base leading-relaxed transition-transform duration-300 hover:translate-x-1 animate-fade-slide-up animation-delay-${
              (index + 1) * 100
            }`}
          >
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HowItWorksSteps;
