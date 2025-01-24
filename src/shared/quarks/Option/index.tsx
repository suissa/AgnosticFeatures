export interface OptionProps {
  value: string;
  text: string;
}

export const Option = ({ value, text }: OptionProps) => (
  <option value={value}>{text}</option>
)