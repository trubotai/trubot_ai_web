interface QuoteBoxProps {
  quote: string;
  className?: string;
}

const QuoteBox = ({ quote, className = "" }: QuoteBoxProps) => {
  return (
    <figure
      className={`bg-gray-100 p-8 rounded-xl text-center my-12 shadow-sm hover-scale-card animate-fade-slide-up ${className}`}
    >
      <blockquote className="text-xl italic text-navy leading-relaxed">
        “{quote}”
      </blockquote>
    </figure>
  );
};

export default QuoteBox;
