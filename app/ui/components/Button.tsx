import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  as?: "button" | "link";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  href = "#",
  children,
  variant = "primary",
  className = "",
  as = "link",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-block px-6 py-3 rounded-lg font-semibold transition";
  const variants = {
    primary: "bg-electric text-white hover:bg-blue-700",
    outline: "border border-electric text-electric hover:bg-blue-50",
    ghost: "text-electric hover:underline",
  };

  if (as === "button") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
