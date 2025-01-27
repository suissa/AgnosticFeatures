import { z } from "zod";

const nomeSchema = z
  .string()
  .refine(
    (name) =>
      name
        .trim()
        .split(/\s+/)
        .filter((word) => word.length >= 2).length >= 2,
    {
      message: "O nome deve ter pelo menos 2 palavras com 2 caracteres ou mais.",
    }
  );

export default nomeSchema;