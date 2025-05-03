import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  as?: "button" | "link";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  animate?: boolean;
  ariaLabel?: string;
}

const Button = ({
  href = "#",
  children,
  variant = "primary",
  className = "",
  as = "link",
  onClick,
  type = "button",
  fullWidth = false,
  animate = false,
  ariaLabel,
}: ButtonProps) => {
  const baseStyles = `inline-block px-6 py-3 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2`;
  const variants = {
    primary: "bg-electric text-white hover:bg-blue-700",
    outline: "border border-electric text-electric hover:bg-blue-50",
    ghost: "text-electric hover:underline",
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${
    fullWidth ? "w-full" : ""
  } ${animate ? "animate-fade-slide-up" : ""} ${className}`;

  if (as === "button") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={combinedClass}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={combinedClass}
      aria-label={ariaLabel}
      role="button"
    >
      {children}
    </Link>
  );
};

export default Button;
