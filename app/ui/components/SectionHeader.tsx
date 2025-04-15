interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-10 ${alignment}`}>
      <h2 className="text-3xl font-bold text-navy mb-2">{title}</h2>

      {subtitle && <p className="text-gray-600 max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}
