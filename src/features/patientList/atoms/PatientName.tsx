import React from "react";
import { PatientNameProps } from "../types/PatientNameProps";
import { Button } from "../../../shared/atoms/Button";

export const PatientName: React.FC<PatientNameProps> = ({ name, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="w-full text-center"
    >
      {name}
    </Button>
  );
};
