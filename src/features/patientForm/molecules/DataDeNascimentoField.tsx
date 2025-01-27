import { useState } from "react";
import { Input } from "../../../shared/atoms/Input";
import { LabelPatient } from "../atoms/LabelPatient";
import { PatientPartialProps } from "../quarks/types/PatientPartalProps";
import { fieldHandleBlur } from "../quarks/validations/fieldHandleBlur";
import validateSchema from "../../../shared/hooks/validations/DataDeNascimentoValidation";

export const DataDeNascimentoField = ({ patient, setPatient }: PatientPartialProps) => {
  const [dataDeNascimento, setDataDeNascimento] = useState<string>(patient.dataDeNascimento || "");
  const [error, setError] = useState("");
  const fieldName = "dataDeNascimento";

  const patientHandleBlur = fieldHandleBlur(patient, setPatient, setError);
  const handleBlur = patientHandleBlur(dataDeNascimento, fieldName, validateSchema);
  return (
    <>
      <LabelPatient htmlFor="dataDeNascimento" labelText="DataDeNascimento Completo" />
      <Input
        value={dataDeNascimento || ""}
        id="dataDeNascimento"
        type="text"
        placeholder="Digite o dataDeNascimento completo"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        
        onChange={(e) => setDataDeNascimento(e.target.value)}
        onBlur={handleBlur} 
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
};
