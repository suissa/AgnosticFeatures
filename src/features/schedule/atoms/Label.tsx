import React from "react";

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => (
  <h4 className="font-medium mb-2">{children}</h4>
);

export default Label;
