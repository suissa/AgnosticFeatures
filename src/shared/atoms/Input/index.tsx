interface InputProps {
  className?: string;
  id?: string;
  type: string;
  value?: string;
  onClick?: () => void;
  onChange?: (e: unknown) => void;
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