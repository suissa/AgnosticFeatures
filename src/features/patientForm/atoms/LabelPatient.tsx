import { Label } from "../../../shared/atoms/Label";

interface LabelProps {
  htmlFor: string;
  labelText: string;
}

export const LabelPatient = ({ htmlFor, labelText }: LabelProps) => (
  <Label htmlFor={htmlFor} labelText={labelText} className="block text-gray-700 font-medium mb-2" />
);