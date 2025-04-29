import Link from "next/link";
import { ElementType } from "react";

interface ButtonProps {
  href?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  rounded?: "md" | "lg" | "full";
  className?: string;
  as?: "button" | "link";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  animate?: boolean;
  ariaLabel?: string;
  iconLeft?: ElementType;
  iconRight?: ElementType;
  iconAnimate?: boolean;
  label: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  disabled?: boolean;
  target?: "_blank" | "_self";
  rel?: string;
}

const Button = ({
  href = "#",
  children,
  size = "md",
  rounded = "lg",
  className = "",
  as = "link",
  onClick,
  type = "button",
  fullWidth = false,
  animate = false,
  ariaLabel,
  iconLeft: IconLeft,
  iconRight: IconRight,
  iconAnimate = false,
  label,
  variant = "primary",
  disabled = false,
  target = "_self",
  rel,
}: ButtonProps) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const roundedClasses = {
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const variantClasses = {
    primary: "bg-electric text-light hover:bg-[color:var(--color-electric)/.8]",
    secondary: "bg-navy text-light hover:bg-[var(--color-navy)/.9]",
    outline: "border border-electric text-electric hover:bg-gray-soft",
    ghost: "text-electric hover:underline",
    link: "text-electric underline hover:text-[color:var(--color-electric)/.8]",
  };

  const iconClass = `h-5 w-5 ${iconAnimate ? "animate-float" : ""}`;

  const buttonClass = `
    inline-flex items-center justify-center font-semibold font-body transition
    focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2
    ${sizeClasses[size]}
    ${roundedClasses[rounded]}
    ${variantClasses[variant]}
    ${fullWidth ? "w-full" : ""}
    ${animate ? "animate-fade-slide-up" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `;

  const content = (
    <>
      {IconLeft && <IconLeft className={`mr-2 ${iconClass}`} />}
      {label}
      {children}
      {IconRight && <IconRight className={`ml-2 ${iconClass}`} />}
    </>
  );

  if (as === "button") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={buttonClass}
        aria-label={ariaLabel || label}
        disabled={disabled}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={buttonClass}
      aria-label={ariaLabel || label}
      target={target}
      rel={target === "_blank" ? rel || "noopener noreferrer" : undefined}
      role="button"
    >
      {content}
    </Link>
  );
};

export default Button;
