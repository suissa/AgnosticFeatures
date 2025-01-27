import { z } from "zod";

// Schema para validar datas no formato YYYY-MM-DD
const dateSchema = z
  .string()
  .refine(
    (value) => {
      // Verifica se a string pode ser convertida para uma data válida
      const date = new Date(value);
      return !isNaN(date.getTime()); // Se não for NaN, a data é válida
    },
    { message: "A data deve estar no formato YYYY-MM-DD e ser válida." }
  )
  .refine(
    (value) => {
      // Exemplo de validação para datas não no futuro
      const date = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Zera a hora para comparar apenas datas
      return date <= today;
    },
    { message: "A data não pode estar no futuro." }
  );

export default dateSchema;
