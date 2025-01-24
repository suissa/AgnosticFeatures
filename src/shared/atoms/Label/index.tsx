interface LabelProps {
  htmlFor: string;
  labelText: string;
  className?: string;
}

export const Label = ({ htmlFor, labelText, className }: LabelProps) => (
  <label htmlFor={htmlFor} className={className}>
    {labelText}
  </label>
);