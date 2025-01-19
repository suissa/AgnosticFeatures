import { ReactNode } from "react";

export interface AccordionProps {
  triggerValue: string;
  children: ReactNode;
  onToggle: () => void
}