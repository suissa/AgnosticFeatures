import React from "react";

const PatientForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Cadastro de Paciente
        </h1>

        <form className="space-y-8">
          {/* Informações Básicas */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Informações Básicas do Paciente
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  placeholder="Digite o nome completo"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Sexo/Gênero
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Selecione</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="nao-binario">Não Binário</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Estado Civil
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Selecione</option>
                  <option value="solteiro">Solteiro(a)</option>
                  <option value="casado">Casado(a)</option>
                  <option value="divorciado">Divorciado(a)</option>
                  <option value="viuvo">Viúvo(a)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  Endereço Completo
                </label>
                <input
                  type="text"
                  placeholder="Digite o endereço completo"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Telefone de Contato
                </label>
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="exemplo@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  CPF
                </label>
                <input
                  type="text"
                  placeholder="000.000.000-00"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </section>

          {/* Informações Clínicas */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Informações Clínicas
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Queixa Principal
                </label>
                <textarea
                  rows={3}
                  placeholder="Descreva a queixa principal"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Histórico Médico
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva doenças, medicamentos e tratamentos prévios"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
          </section>

          {/* Informações Adicionais */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Informações Adicionais
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nível de Escolaridade
                </label>
                <input
                  type="text"
                  placeholder="Digite o nível de escolaridade"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Ocupação/Profissão
                </label>
                <input
                  type="text"
                  placeholder="Digite a ocupação ou profissão"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Hábitos de Vida
                </label>
                <textarea
                  rows={4}
                  placeholder="Alimentação, prática de exercícios, uso de substâncias"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
          </section>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;
