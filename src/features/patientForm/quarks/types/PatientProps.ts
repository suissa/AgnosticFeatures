
export interface PatientProps {
  nome: string;
  dataNascimento: string;
  sexo: string;
  estadoCivil: string;
  endereco: {
    cep?: string;
    rua?: string;
    cidade?: string;
    estado?: string;
    bairro?: string;
    numero?: string;
    complemento?: string;
  }
  telefone: string;
  nascimento: string;
  email: string;
  cpf: string;
  profissao: string;
  escolaridade: string;
  religiao: string;
  queixa: string;
  historico: string;
}