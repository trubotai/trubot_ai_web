import { ReactNode } from "react";

interface PlatformCardProps {
  name: string;
  feature: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
}
export default function PlatformCard({
  name,
  feature,
  icon,
  href,
  className = "",
}: PlatformCardProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      className={`block bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center hover:shadow-md transition ${className}`}
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon && <div className="text-3xl mb-2">{icon}</div>}

      <h4 className="text-lg font-semibold text-navy mb-1">{name}</h4>

      <p className="text-sm text-gray-600">{feature}</p>
    </Wrapper>
  );
}
