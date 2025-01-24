import { PatientClinicalInfos } from "../molecules/PatientClininalInfos";
import { PatientBasicInfos } from "../molecules/PatientBasicInfos";
import { PatientAditionalInfos } from "../molecules/PatientAditionalInfos";
import { useEffect, useState } from "react";

export interface PatientProps {
  nome: string;
  dataNascimento: string;
  sexo: string;
  estadoCivil: string;
  endereco: {
    cep?: string;
    rua?: string;
    cidade?: string;
    estado?: string;
    bairro?: string;
    numero?: string;
    complemento?: string;
  }
  telefone: string;
  nascimento: string;
  email: string;
  cpf: string;
  profissao: string;
  escolaridade: string;
  religiao: string;
  queixa: string;
  historico: string;
}



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