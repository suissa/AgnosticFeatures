interface InputProps {
  className?: string;
  id?: string;
  type: string;
  value?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeypress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}


export const Input = ({ className, id, type, onClick, onChange}: InputProps) => (
  <input 
    className={className}
    id={id}
    type={type}
    onClick={onClick}
    onChange={onChange}
  />
)