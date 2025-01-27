import { z } from "zod";

const emailSchema = z.string().email("Digite um email válido");

export default emailSchema;