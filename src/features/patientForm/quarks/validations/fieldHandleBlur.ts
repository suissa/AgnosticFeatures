import { z, ZodEffects, ZodOptional, ZodString } from "zod";
import { PatientProps } from "../../quarks/types/PatientProps";

export const fieldHandleBlur = (
  patient: Partial<PatientProps>,
  setPatient: React.Dispatch<React.SetStateAction<Partial<PatientProps>>>, 
  setError: React.Dispatch<React.SetStateAction<string>>) =>
  (
    field: string, 
    fieldName: string, 
    validateSchema: ZodString | 
      ZodEffects<ZodString> | 
      ZodOptional<ZodString> |
      ZodEffects<ZodEffects<ZodString>>) => () => {

    try {
      validateSchema.parse(field); // Valida o nome com Zod
      setPatient({ ...patient, [fieldName]: field });
      setError(""); // Limpa o erro se o nome for válido
    } catch (err: Error | z.ZodError | unknown) {
      if (err instanceof z.ZodError) {
        setError(err.issues[0].message); // Mostra a mensagem de erro
        return;
      }
      if (err instanceof Error) {
        setError(err.message); // Mostra a mensagem de erro
        return;
      }
    }
  };