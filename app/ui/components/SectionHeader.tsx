interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left" | "right";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  const subtitleWrapper =
    align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : "";

  return (
    <div className={`mb-10 ${alignment} ${className}`}>
      <h2 className="text-3xl font-extrabold text-navy mb-4 leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className={`text-gray-600 max-w-2xl ${subtitleWrapper}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
