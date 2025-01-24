import { LabelPatient } from "../atoms/LabelPatient";
import { TextArea } from "../../../shared/atoms/TextArea";
import { PatientPartialProps } from "../quarks/types/PatientPartalProps";

export const PatientClinicalInfos = ({ patient, setPatient }: PatientPartialProps) => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPatient({
      ...patient,
      [e.target.id]: e.target.value,
    });
  }
  return (
  <div>
    
    <h2 className="text-xl font-semibold text-gray-700 mb-4">
      Informações Clínicas
    </h2>
    <div className="space-y-6">
      <div>
        <LabelPatient htmlFor="queixa" labelText="Queixa Principal" />
        <TextArea
          id="queixa"
          value={patient.queixa || ""}
          rows={3}
          placeholder="Descreva a queixa principal"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={onChange}
        ></TextArea>
      </div>
      <div>
        <LabelPatient htmlFor="historico" labelText="Histórico Médico" />
        <TextArea
          id="historico"
          value={patient.historico || ""}
          rows={4}
          placeholder="Descreva doenças, medicamentos e tratamentos prévios"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={onChange}
        ></TextArea>
      </div>
    </div>
  </div>
)};
