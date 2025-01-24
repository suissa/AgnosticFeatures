import React, { useState } from "react";
import { AccordionTrigger } from "../molecules/AccordionTrigger";
import { ReactNode } from "react";

export interface AccordionProps {
  triggerValue: string;
  children: ReactNode;
  onToggle: () => void
}

export const Accordion: React.FC<AccordionProps> = ({ triggerValue, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="border border-gray-300 rounded-md mb-2.5">
      <AccordionTrigger triggerValue={triggerValue} onToggle={toggleAccordion} isOpen={isOpen} />
      {isOpen && <div className="p-2.5 bg-gray-50">{children}</div>}
    </div>
  );
};
