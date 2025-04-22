interface QuoteBoxProps {
  quote: string;
  author: string;
  role: string;
}

const QuoteBox = ({ quote, author, role }: QuoteBoxProps) => {
  return (
    <div className="bg-gray-100 p-8 rounded-xl text-center my-12 shadow-sm hover-scale-card animate-fade-slide-up">
      <blockquote className="text-xl italic text-navy mb-4">
        “{quote}”
      </blockquote>

      <p className="font-semibold text-gray-700">{author}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
};

export default QuoteBox;
