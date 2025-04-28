interface JourneyStepProps {
  stepNumber: number;
  title: string;
  description: string;
  delay?: number;
}

const JourneyStep = ({
  stepNumber,
  title,
  description,
  delay = 0,
}: JourneyStepProps) => {
  return (
    <div
      className={`
        flex flex-col items-center text-center space-y-4 
        animate-fade-slide-up transition-all duration-300
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Step Circle */}
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-electric text-white font-bold text-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
        {String(stepNumber).padStart(2, "0")}
      </div>

      {/* Step Title */}
      <h4 className="text-xl font-semibold text-navy">{title}</h4>

      {/* Step Description */}
      <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
};

export default JourneyStep;
