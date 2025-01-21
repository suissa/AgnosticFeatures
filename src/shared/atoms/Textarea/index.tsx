import { ReactNode } from "react";

interface TextareaProps {
  className: string;
  id: string;
  children: ReactNode;
  size: number;
}

export const Textarea = ({ className, id, children, size }: TextareaProps) => (
  <textarea className={className} id={id} cols={size}>
    {children}
  </textarea>

)