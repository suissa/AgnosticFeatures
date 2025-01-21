interface InputProps {
  className?: string;
  id?: string;
  type: string;
  value: string;
  placeholder?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}


export const Input = ({ 
  className, id, type, placeholder, value,
  onClick, onChange, onFocus, onBlur, onKeyDown}: InputProps) => (
  <input 
    className={className}
    id={id}
    type={type}
    value={value}
    placeholder={placeholder}
    onClick={onClick}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onKeyDown={onKeyDown}
  />
)