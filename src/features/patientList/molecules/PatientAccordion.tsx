import React, { useState } from "react";
import { PatientAccordionProps } from "../types/PatientAccordionProps";
import { Accordion } from "../../../shared/components/Accordion";

export const PatientAccordion: React.FC<PatientAccordionProps> = ({ patient }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Accordion
      triggerValue={patient.name}
      onToggle={toggleAccordion}
    >
      <div className="p-2.5 bg-gray-50">
        <p>Idade: {patient.age} anos</p>
        <p>Condição: {patient.condition}</p>
        <p>Histórico: {patient.history}</p>
        <p>Anotações: {patient.notes}</p>
      </div>
      </Accordion>
  );
};
