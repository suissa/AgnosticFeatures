import { z } from "zod";

const EmailValidation = z.string().email("Digite um email válido");

export default EmailValidation;