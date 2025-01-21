import { useState } from "react";
import { PatientProps } from "../types/PatientProps";

const usePatientData = () => {
  const [patients, setPatients] = useState<PatientProps[]>([
    {
      id: 1,
      name: "Ana Souza",
      age: 32,
      condition: "Hipertensão",
      notes: "Monitoramento semanal necessário.",
      history: "Histórico do paciente"
    },
    {
      id: 2,
      name: "Carlos Mendes",
      age: 45,
      condition: "Diabetes Tipo 2",
      notes: "Acompanhamento com nutricionista.",
      history: "Histórico do paciente"
    },
    {
      id: 3,
      name: "Mariana Costa",
      age: 28,
      condition: "Ansiedade",
      notes: "Sessões de terapia semanal.",
      history: "Histórico do paciente"
    },
    {
      id: 4,
      name: "João Silva",
      age: 50,
      condition: "Colesterol Alto",
      notes: "Exercícios físicos recomendados.",
      history: "Histórico do paciente"
    },
  ]);

  return { patients, setPatients };
};

export default usePatientData;