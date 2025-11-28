import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-5 m-0.5">
      {children}
    </section>
  );
};

export default Section;
