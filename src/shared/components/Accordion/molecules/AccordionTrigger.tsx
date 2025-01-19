import React from "react";
import { AccordionTriggerProps } from "../types/AccordionTriggerProps";

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ triggerValue, onToggle, isOpen }) => (
  <div
    className="flex justify-between items-center p-2.5 bg-gray-100 cursor-pointer"
    onClick={onToggle}
    aria-expanded={isOpen}
  >
    <span>{triggerValue}</span>
    <span>{isOpen ? "▲" : "▼"}</span> {/* Ícone que indica o estado */}
  </div>
);
