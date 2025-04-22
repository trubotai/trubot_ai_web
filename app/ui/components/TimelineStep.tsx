interface TimelineStepProps {
  step: string;
  description: string;
  delay?: number;
}

const TimelineStep = ({ step, description, delay = 0 }: TimelineStepProps) => {
  return (
    <div
      className={`relative pl-8 border-l-2 border-electric animate-fade-slide-up`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Circle bullet */}
      <div className="absolute left-[-10px] top-1 w-4 h-4 rounded-full bg-electric" />

      {/* Content */}
      <h4 className="text-lg font-semibold text-navy mb-1">{step}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default TimelineStep;
