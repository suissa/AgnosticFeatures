import React, { useState } from "react";
import { PatientProps } from "../organisms/PatientForm";

interface PatientAddressProps {
  patient: Partial<PatientProps>;
  setPatient: React.Dispatch<React.SetStateAction<Partial<PatientProps>>>;
}

const AddressForm = ({ patient, setPatient }: PatientAddressProps) => {
  const [cep, setCep] = useState(patient.endereco?.cep || ""); // Sincroniza estado inicial do CEP

  const fetchAddress = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        alert("CEP não encontrado!");
        return;
      }

      setPatient((prev) => ({
        ...prev,
        endereco: {
          ...prev?.endereco, // Garante que `endereco` existe antes de espalhar
          rua: data.logradouro || "",
          bairro: data.bairro || "",
          cidade: data.localidade || "",
          estado: data.uf || "",
          cep, // Inclui o CEP digitado
        },
      }));
    } catch (error) {
      console.error("Erro ao buscar o endereço:", error);
    }
  };

  const handleCepBlur = () => {
    if (cep.length === 8) {
      fetchAddress(cep);
    } else {
      alert("CEP inválido. Digite 8 números.");
    }
  };

  const handleChange = (field: string, value: string) => {
    setPatient((prev) => ({
      ...prev,
      endereco: {
        ...prev.endereco,
        [field]: value,
      },
    }));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">CEP</label>
          <input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            onBlur={handleCepBlur}
            placeholder="Digite o CEP"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Rua</label>
          <input
            type="text"
            value={patient.endereco?.rua || ""}
            disabled
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Bairro</label>
          <input
            type="text"
            value={patient.endereco?.bairro || ""}
            disabled
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Cidade</label>
          <input
            type="text"
            value={patient.endereco?.cidade || ""}
            disabled
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Estado</label>
          <input
            type="text"
            value={patient.endereco?.estado || ""}
            disabled
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Número</label>
          <input
            type="text"
            value={patient.endereco?.numero || ""}
            onChange={(e) => handleChange("numero", e.target.value)}
            placeholder="Digite o número"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Complemento
          </label>
          <input
            type="text"
            value={patient.endereco?.complemento || ""}
            onChange={(e) => handleChange("complemento", e.target.value)}
            placeholder="Digite o complemento"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
