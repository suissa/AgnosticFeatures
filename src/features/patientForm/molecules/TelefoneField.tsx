
import { Input } from "../../../shared/atoms/Input";
import { useMask } from '@react-input/mask';
import { LabelPatient } from "../atoms/LabelPatient";
import { PatientPartialProps } from "../quarks/types/PatientPartalProps";
import validateSchema from "../../../shared/hooks/validations/TelefoneValidation";
import { fieldHandleBlur } from "../quarks/validations/fieldHandleBlur";
import { useState } from "react";

export const TelefoneField = ({ patient, setPatient }: PatientPartialProps) => {
  const [telefone, setTelefone] = useState<string>(patient.telefone || "");
  const [error, setError] = useState("");
  const fieldName = "telefone";

  const patientHandleBlur = fieldHandleBlur(patient, setPatient, setError);
  const handleBlur = patientHandleBlur(telefone, fieldName, validateSchema);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const value = event.target.value;
    setTelefone(value);
    setError(""); // Limpa o erro enquanto o usuário digita
  };

  const inputRef = useMask({
    mask: '(99) 99999-9999',
    replacement: { 9: /\d/ },
  });

  
  return (
    <>
      <LabelPatient htmlFor="telefone" labelText="Telefone completo" />
      <Input
        type="text"
        value={telefone} // Valor do input
        ref={inputRef}
        onChange={handleChange}
        onBlur={handleBlur} // Valida ao perder o foco
        placeholder="(XX) XXXXX-XXXX"
        className={`w-full border rounded-lg px-4 py-2 focus:outline-none ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
};
