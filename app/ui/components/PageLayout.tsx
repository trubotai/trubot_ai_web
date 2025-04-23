import { JSX } from "react";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
}

const PageLayout = ({
  children,
  className = "",
  id,
  as: Component = "section",
}: PageLayoutProps) => {
  return (
    <Component id={id} className={`max-w-7xl mx-auto px-4 py-16 ${className}`}>
      {children}
    </Component>
  );
};

export default PageLayout;
