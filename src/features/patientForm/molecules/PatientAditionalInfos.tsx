
import { Input } from "../../../shared/atoms/Input";
import { TextArea } from "../../../shared/atoms/TextArea";
import { LabelPatient } from "../atoms/LabelPatient";
import { PatientPartialProps } from "../quarks/types/PatientPartalProps";

export const PatientAditionalInfos = ({ patient, setPatient }: PatientPartialProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatient({
      ...patient,
      [e.target.id]: e.target.value,
    });
  }
  
  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPatient({
      ...patient,
      [e.target.id]: e.target.value,
    });
  }
  return(
  <div>
    
    <h2 className="text-xl font-semibold text-gray-700 mb-4">
      Informações Adicionais
    </h2>
    
    <div className="space-y-6">
      <div>
        <LabelPatient htmlFor="escolaridade" labelText="Nível de Escolaridade" />
        <Input
          value=""
          id="escolaridade"
          type="text"
          placeholder="Digite o nível de escolaridade"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={onChange}
        />
      </div>
      <div>
        <LabelPatient htmlFor="ocupacao" labelText="Ocupação/Profissão" />
        <Input
          value=""
          id="ocupacao"
          type="text"
          placeholder="Digite a ocupação ou profissão"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={onChange}
        />
      </div>
      <div>
        <LabelPatient htmlFor="habitos" labelText="Hábitos de Vida" />
        <TextArea
          id="habitos"
          rows={4}
          placeholder="Alimentação, prática de exercícios, uso de substâncias"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={onChangeTextArea}
        ></TextArea>
      </div>
    </div>
  </div>
)};
