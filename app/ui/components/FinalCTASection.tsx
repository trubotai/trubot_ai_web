import Button from "./Button";
import PageLayout from "./PageLayout";

interface FinalCTASectionProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaLink: string;
  align?: "center" | "left" | "right";
  className?: string;
}

export default function FinalCTASection({
  title,
  subtitle,
  ctaLabel,
  ctaLink,
  align = "center",
  className = "",
}: FinalCTASectionProps) {
  const alignmentClass =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  return (
    <section className="bg-navy py-20 text-white">
      <PageLayout className={`${alignmentClass} ${className}`}>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">{title}</h2>

          <p className="text-gray-300">{subtitle}</p>

          <Button
            href={ctaLink}
            variant="primary"
            className="bg-white text-navy hover:bg-gray-100"
          >
            {ctaLabel}
          </Button>
        </div>
      </PageLayout>
    </section>
  );
}
