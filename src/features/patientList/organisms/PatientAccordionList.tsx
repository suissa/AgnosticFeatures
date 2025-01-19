import React from "react";
import usePatientData from "../hooks/usePatientData";
import { PatientAccordion } from "../molecules/PatientAccordion";

export const PatientAccordionList: React.FC = () => {
  const { patients } = usePatientData();

  return (
    <div>
      {patients.map((patient) => (
        <PatientAccordion key={patient.id} patient={patient} />
      ))}
    </div>
  );
};
