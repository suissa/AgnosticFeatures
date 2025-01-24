import { useState } from "react";
import { Input } from "../../../shared/atoms/Input";
import { LabelPatient } from "../atoms/LabelPatient";
import { PatientPartialProps } from "../quarks/types/PatientPartalProps";
import { z } from "zod";

const nomeSchema = z
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

  const handleBlur = () => {
    try {
      nomeSchema.parse(nome); // Valida o nome com Zod
      setPatient({ ...patient, nome });
      setError(""); // Limpa o erro se o nome for válido
    } catch (err: Error | z.ZodError | unknown) {
      if (err instanceof z.ZodError) {
        setError(err.issues[0].message); // Mostra a mensagem de erro
        return;
      }
      if (err instanceof Error) {
        setError(err.message); // Mostra a mensagem de erro
        return;
      }
    }
  };

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
