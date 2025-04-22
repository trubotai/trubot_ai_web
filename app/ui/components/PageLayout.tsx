interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({
  children,
  className = "",
}: PageLayoutProps) {
  return (
    <section className={`max-w-7xl px-4 mx-auto py-16 ${className}`}>
      {children}
    </section>
  );
}
