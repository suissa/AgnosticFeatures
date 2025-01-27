import { useState } from "react";
import { LabelPatient } from "../atoms/LabelPatient";
import { PatientPartialProps } from "../quarks/types/PatientPartalProps";
import { fieldHandleBlur } from "../quarks/validations/fieldHandleBlur";
import { createStringSchema} from "../../../shared/hooks/validations/RequiredValidation";
import { Select } from "../../../shared/atoms/Select";

const validateSchema = createStringSchema(true);
const optionsSexo = [
  { value: "", text: "Selecione" },
  { value: "masculino", text: "Masculino" },
  { value: "feminino", text: "Feminino" },
  { value: "nao-binario", text: "Não Binário" },
  { value: "outro", text: "Outro" },
]

export const SexoField = ({
  patient,
  setPatient,
}: PatientPartialProps) => {
  const [sexo, setSexo] = useState<string>(
    patient.sexo || ""
  );
  const [error, setError] = useState("");
  const fieldName = "sexo";

  const patientHandleBlur = fieldHandleBlur(patient, setPatient, setError);
  const handleBlur = patientHandleBlur(
    sexo,
    fieldName,
    validateSchema
  );

  return (
    <>
      <LabelPatient htmlFor="sexo" labelText="Sexo/Gênero" />
      <Select
        value={sexo}
        id="sexo"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        options={optionsSexo}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSexo(e.target.value)}
        onBlur={handleBlur}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
};
