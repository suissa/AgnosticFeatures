import { PatientProps } from "./PatientProps";

export interface PatientPartialProps  {
  patient: Partial<PatientProps>;
  setPatient: React.Dispatch<React.SetStateAction<Partial<PatientProps>>>
}