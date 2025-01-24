import { Button } from "../../../shared/atoms/Button";
import { PatientForm } from "../organisms/PatientForm";
const PatientFormTemplate = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Cadastro de Paciente
        </h1>

        <form className="space-y-8">
          <PatientForm />
          <Button type="submit">Salvar</Button>
        </form>
      </div>
    </div>
  );
};

export default PatientFormTemplate;
