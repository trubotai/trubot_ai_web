import { ArrowRight } from "lucide-react";

import Button from "@/app/ui/components/shared/Button";

interface ProductCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
  animationDelay?: number;
}

const ProductCard = ({
  icon: Icon,
  title,
  description,
  link,
  animationDelay = 0,
}: ProductCardProps) => {
  return (
    <div
      className="bg-light rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 fade-in slide-in-up"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="mb-4 w-12 h-12 rounded-full bg-electric/10 flex items-center justify-center">
        <Icon className="text-electric w-6 h-6" />
      </div>
      <h3 className="text-navy font-heading text-lg font-semibold mb-2">
        {title}
      </h3>
      <p className="text-navy/80 font-body text-sm mb-4">{description}</p>
      <Button
        href={link}
        variant="ghost"
        animate
        label="Learn More"
        iconRight={ArrowRight}
        iconAnimate
      />
    </div>
  );
};

export default ProductCard;
