import React from "react";
import usePatientData from "../hooks/usePatientData";
import { PatientAccordion } from "../molecules/PatientAccordion";

export const PatientAccordionList: React.FC = () => {
  const { patients } = usePatientData();

  return (
    <div>
      {patients.map((patient) => {
        return (
          <PatientAccordion className="w-1/4" key={patient.id} patient={patient}/>
        )
      })}
    </div>
  );
};
