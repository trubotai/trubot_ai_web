import { JSX } from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "default" | "full" | "narrow";
  background?: "white" | "gray" | "dark" | "transparent";
  id?: string;
  padding?: "default" | "none" | "lg";
  as?: keyof JSX.IntrinsicElements;
  animate?: boolean;
}

const PageLayout = ({
  children,
  className = "",
  maxWidth = "default",
  background = "transparent",
  id,
  padding = "default",
  as: Component = "section",
  animate = false,
}: PageLayoutProps) => {
  const maxWidthClass = {
    default: "max-w-7xl",
    full: "w-full",
    narrow: "max-w-3xl",
  }[maxWidth];

  const backgroundClass = {
    white: "bg-light",
    gray: "bg-gray-soft",
    dark: "bg-dark text-light",
    transparent: "",
  }[background];

  const paddingClass = {
    default: "px-4 py-16",
    none: "",
    lg: "px-6 py-24",
  }[padding];

  return (
    <Component
      id={id}
      className={`
        ${maxWidthClass} mx-auto
        ${paddingClass}
        ${backgroundClass}
        font-body text-navy
        ${animate ? "animate-fade-in" : ""}
        ${className}
      `}
    >
      {children}
    </Component>
  );
};

export default PageLayout;
