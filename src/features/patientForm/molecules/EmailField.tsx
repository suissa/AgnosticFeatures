import { useState } from "react";
import { z } from "zod";
import { PatientPartialProps } from "../quarks/types/PatientPartalProps";
import { LabelPatient } from "../atoms/LabelPatient";

const emailSchema = z.string().email("Digite um email válido");

export const EmailField = ({ patient, setPatient }: PatientPartialProps) => {
  const [email, setEmail] = useState<string>(patient.email || "");
  const [error, setError] = useState("");

  const handleBlur = () => {
    try {
      emailSchema.parse(email); // Valida o email com Zod
      setPatient({ ...patient, email });
      setError(""); // Limpa o erro se o email for válido
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
      <LabelPatient htmlFor="email" labelText="Email" />
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleBlur} // Chama a validação no blur
        placeholder="email@example.com"
        className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none ${
        error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
};
