interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

export default function Button({
  href = "#",
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-block px-6 py-3 rounded-lg font-semibold transition";
  const variants = {
    primary: "bg-electric text-white hover:bg-blue-700",
    outline: "border border-electric text-electric hover:bg-blue-50",
    ghost: "text-electric hover:underline",
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
