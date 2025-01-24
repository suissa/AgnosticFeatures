import { useState } from "react";
import { PatientPartialProps } from "../quarks/types/PatientPartalProps";
import { LabelPatient } from "../atoms/LabelPatient";
import { fieldHandleBlur } from "../quarks/validations/fieldHandleBlur";
import validateSchema from "../../../shared/hooks/validations/EmailValidation";

export const EmailField = ({ patient, setPatient }: PatientPartialProps) => {
  const [email, setEmail] = useState<string>(patient.email || "");
  const [error, setError] = useState("");
  const fieldName = "email";

  const patientHandleBlur = fieldHandleBlur(patient, setPatient, setError);
  const handleBlur = patientHandleBlur(email, fieldName, validateSchema);
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

