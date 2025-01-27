import { z } from "zod";

export const createStringSchema = (required: boolean) =>
  required
    ? z.string()
        .min(1, "Este campo é obrigatório.") // Valida se a string tem pelo menos 1 caractere
    : z.string().optional(); // Campo opcional
