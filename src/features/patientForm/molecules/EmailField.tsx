import { useState } from "react";
import { z } from "zod";
import { PatientPartialProps } from "../quarks/types/PatientPartalProps";
import { LabelPatient } from "../atoms/LabelPatient";
import { fieldHandleBlur } from "../quarks/validations/fieldHandleBlur";

const validateSchema = z.string().email("Digite um email válido");

export const EmailField = ({ patient, setPatient }: PatientPartialProps) => {
  const [email, setEmail] = useState<string>(patient.email || "");
  const [error, setError] = useState("");
  const fieldName = "email";

  const handleBlur = fieldHandleBlur(patient, setPatient, setError)(email, fieldName, validateSchema);

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

