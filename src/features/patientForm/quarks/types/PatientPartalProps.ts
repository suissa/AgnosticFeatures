import { PatientProps } from "../../organisms/PatientForm";

export interface PatientPartialProps  {
  patient: Partial<PatientProps>;
  setPatient: React.Dispatch<React.SetStateAction<Partial<PatientProps>>>
}