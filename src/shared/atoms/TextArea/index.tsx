import { ReactNode } from "react";

interface TextareAProps {
  className?: string;
  id?: string;
  children: ReactNode;
  size?: number;
  placeholder?: string;
  value?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({ className, id, children, size, placeholder, value,
  onClick, onChange, onFocus, onBlur, onKeyDown }: TextareAProps) => (
  <textarea 
    className={className}
    value={value}
    id={id} 
    cols={size}
    placeholder={placeholder}
    onClick={onClick}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onKeyDown={onKeyDown}>
    {children}
  </textarea>

)