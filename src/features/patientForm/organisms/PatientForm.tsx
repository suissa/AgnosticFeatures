import { PatientClinicalInfos } from "../molecules/PatientClininalInfos";
import { PatientBasicInfos } from "../molecules/PatientBasicInfos";
import { PatientAditionalInfos } from "../molecules/PatientAditionalInfos";
import { useEffect, useState } from "react";
import { PatientProps } from "../quarks/types/PatientProps";

export const PatientForm = () => {
  const [patient, setPatient] = useState<Partial<PatientProps>>({
    endereco: {
      rua: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: "", // Valor inicial como string vazia
      numero: "",
      complemento: "",
    },
  });

  useEffect(() => {
    console.log(patient);
  }, [patient]);

  return (
  <>
    <section id="section-patient-basic-infos">
      <PatientBasicInfos patient={patient} setPatient={setPatient} />
    </section>
    <section id="section-patient-clinical-infos">
      <PatientClinicalInfos patient={patient} setPatient={setPatient} />
    </section>
    <section id="section-patient-additional-infos">
      <PatientAditionalInfos patient={patient} setPatient={setPatient} />
    </section>
  </>
)}