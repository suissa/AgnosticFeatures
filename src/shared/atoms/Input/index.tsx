import React, { forwardRef } from "react";

interface InputProps {
  className?: string;
  id?: string;
  type: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

// Usando forwardRef para aceitar corretamente refs externas
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      id,
      type,
      placeholder,
      value,
      required,
      onClick,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
    },
    ref
  ) => (
    <input
      ref={ref} // Encaminha a ref recebida para o elemento input
      className={className}
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      onClick={onClick}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    />
  )
);

