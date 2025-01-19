import React, { useState } from "react";
import { PatientAccordionProps } from "../types/PatientAccordionProps";
// import { Button } from "../../../shared/atoms/Button";

export const PatientAccordion: React.FC<PatientAccordionProps> = ({ patient }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={toggleAccordion} 
      className="p-2.5 w-3/4 mx-auto cursor-pointer mb-2.5 border-2 border-gray-300 rounded-md">
      <div className="flex items-center justify-between bg-gray-50">
        {/* <Button variant="secondary"> */}
          {patient.name}
        {/* </Button> */}c  
      </div>
      {isOpen && (
        <div className="p-2.5" style={{ background: "#fafafa" }}>
          <p><strong>Idade:</strong> {patient.age}</p>
          <p><strong>Condição:</strong> {patient.condition}</p>
          <p><strong>Notas:</strong> {patient.notes}</p>
        </div>
      )}
    </div>
  );
};
