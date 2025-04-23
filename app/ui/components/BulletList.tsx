interface BulletListProps {
  title?: string;
  items: string[];
  className?: string;
  align?: "left" | "center" | "right";
  animate?: boolean;
  iconPrefix?: string;
  compact?: boolean;
}

const BulletList = ({
  title,
  items,
  className = "",
  align = "left",
  animate = true,
  iconPrefix = "",
  compact = false,
}: BulletListProps) => {
  const alignmentClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "right"
      ? "text-right ml-auto"
      : "text-left";

  const animationClass = animate ? "animate-fade-slide-up" : "";
  const spacingClass = compact ? "space-y-2" : "space-y-4";
  const itemSpacing = compact ? "mb-1" : "mb-2";

  return (
    <div
      className={`w-full ${alignmentClass} ${spacingClass} ${className} ${animationClass}`}
    >
      {title && <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>}

      <ul
        role="list"
        className={`list-disc ${
          align === "center" ? "list-inside" : "pl-5"
        } text-gray-700 leading-relaxed`}
      >
        {items.map((item, idx) => (
          <li key={idx} role="listitem" className={itemSpacing}>
            {iconPrefix && (
              <span className="mr-2 text-lg leading-none">{iconPrefix}</span>
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletList;
