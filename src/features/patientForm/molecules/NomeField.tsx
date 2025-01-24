import { useState } from "react";
import { Input } from "../../../shared/atoms/Input";
import { LabelPatient } from "../atoms/LabelPatient";
import { PatientPartialProps } from "../quarks/types/PatientPartalProps";
import { z } from "zod";
import { fieldHandleBlur } from "../quarks/validations/fieldHandleBlur";
const validateSchema = z
  .string()
  .refine(
    (name) =>
      name
        .trim()
        .split(/\s+/)
        .filter((word) => word.length >= 2).length >= 2,
    {
      message: "O nome deve ter pelo menos 2 palavras com 2 caracteres ou mais.",
    }
  );



export const NomeField = ({ patient, setPatient }: PatientPartialProps) => {
  const [nome, setNome] = useState<string>(patient.nome || "");
  const [error, setError] = useState("");
  const fieldName = "nome";

  const handleBlur = fieldHandleBlur(patient, setPatient, setError)(nome, fieldName, validateSchema);

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
