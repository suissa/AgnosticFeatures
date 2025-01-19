import React from "react";
import { PatientAccordionList } from "../organisms/PatientAccordionList";

const PatientListExample: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Lista de Pacientes</h1>
      <PatientAccordionList />
    </div>
  );
};

export default PatientListExample;
