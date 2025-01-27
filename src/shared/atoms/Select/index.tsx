import { Option, OptionProps } from "../../quarks/Option";
interface SelectProps {
  className?: string;
  id?: string;
  options?: OptionProps[];
  value?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
}

export const Select = ({ className, options, value, id, onChange, onClick }: SelectProps) => (
  <select 
    id={id}
    value={value}
    className={className}
    onChange={onChange}
    onClick={onClick}
    onBlur={onChange}
  >
    {options && Array.isArray(options) && options.map((option, index) => (
      <Option key={index} value={option.value} text={option.text} />
    ))}
  </select>
)