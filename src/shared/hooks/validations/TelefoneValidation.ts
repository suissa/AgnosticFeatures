import { z } from "zod";


const TelefoneValidation = z
  .string()
  .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone deve estar no formato (XX) XXXXX-XXXX");

export default TelefoneValidation;