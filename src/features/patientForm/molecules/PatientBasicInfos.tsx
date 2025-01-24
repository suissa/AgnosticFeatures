import AddressForm from "./AddressForm";
import { LabelPatient } from "../atoms/LabelPatient";
import { Input } from "../../../shared/atoms/Input";
import { Select } from "../../../shared/atoms/Select";
import { PatientPartialProps } from "../quarks/types/PatientPartalProps";
import { EmailField } from "./EmailField";
import { NomeField } from "./NomeField";
const optionsSexo = [
  { value: "", text: "Selecione" },
  { value: "masculino", text: "Masculino" },
  { value: "feminino", text: "Feminino" },
  { value: "nao-binario", text: "Não Binário" },
  { value: "outro", text: "Outro" },
]

const optionsEstadoCivil = [
  { value: "", text: "Selecione" },
  { value: "solteiro", text: "Solteiro(a)" },
  { value: "casado", text: "Casado(a)" },
  { value: "divorciado", text: "Divorciado(a)" },
  { value: "viuvo", text: "Viúvo(a)" },
]

export const PatientBasicInfos = ({ patient, setPatient }: PatientPartialProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatient({
      ...patient,
      [e.target.id]: e.target.value,
    });
  }
  
  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPatient({
      ...patient,
      [e.target.id]: e.target.value,
    });
  }

  return (
  <div>
    
    <h2 className="text-xl font-semibold text-gray-700 mb-4">
      Informações Básicas do Paciente
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <NomeField patient={patient} setPatient={setPatient} />
      </div>
      <div>
        <LabelPatient htmlFor="nascimento" labelText="Data de Nascimento" />
        <Input
          value={patient.nascimento || ""}
          id="nascimento"
          type="date"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={onChange}
        />
      </div>
      <div>
        <LabelPatient htmlFor="sexo" labelText="Sexo/Gênero" />
        <Select 
          value={patient.sexo || ""}
          id="sexo"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          options={optionsSexo}
          onChange={onChangeSelect}
        />
      </div>
      <div>
        <LabelPatient htmlFor="estadoCivil" labelText="Estado Civil" />
        <Select 
          value={patient.estadoCivil || ""}
          id="estadoCivil"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          options={optionsEstadoCivil}
          onChange={onChangeSelect}
        />
      </div>
      <div className="md:col-span-2">
        <LabelPatient htmlFor="name" labelText="Endereço Completo" />
        <AddressForm patient={patient} setPatient={setPatient} />
      </div>
      <div>
        <LabelPatient htmlFor="telefone" labelText="Telefone de Contato" />
        <Input
          value={patient.telefone || ""}
          id="telefone"
          type="tel"
          placeholder="(00) 00000-0000"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={onChange}
        />
      </div>
      <div>
        <EmailField patient={patient} setPatient={setPatient} />
      </div>
      <div>
        <LabelPatient htmlFor="cpf" labelText="CPF" />
        <Input
          value={patient.cpf || ""}
          id="cpf"
          type="text"
          placeholder="000.000.000-00"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={onChange}
        />
      </div>
    </div>
  </div>
  
)};
