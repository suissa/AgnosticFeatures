import { useState } from "react";
import { Input } from "../../../shared/atoms/Input";
import { LabelPatient } from "../atoms/LabelPatient";
import { PatientPartialProps } from "../quarks/types/PatientPartalProps";
import { fieldHandleBlur } from "../quarks/validations/fieldHandleBlur";
import validateSchema from "../../../shared/hooks/validations/NomeValidation";

export const NomeField = ({ patient, setPatient }: PatientPartialProps) => {
  const [nome, setNome] = useState<string>(patient.nome || "");
  const [error, setError] = useState("");
  const fieldName = "nome";

  const patientHandleBlur = fieldHandleBlur(patient, setPatient, setError);
  const handleBlur = patientHandleBlur(nome, fieldName, validateSchema);
  return (
    <>
      <LabelPatient htmlFor="nome" labelText="Nome Completo" />
      <Input
        value={nome || ""}
        id="nome"
        type="text"
        placeholder="Digite o nome completo"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        
        onChange={(e) => setNome(e.target.value)}
        onBlur={handleBlur} 
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
};
