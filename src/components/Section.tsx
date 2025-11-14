import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <section className="flex flex-wrap justify-center gap-7 items-stretch">{children}</section>;
};

export default Section;