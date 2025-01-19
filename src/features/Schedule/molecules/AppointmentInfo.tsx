import React from "react";
import Label from "../atoms/Label"

interface AppointmentInfoProps {
  title: string;
  description: string;
}

const AppointmentInfo: React.FC<AppointmentInfoProps> = ({
  title,
  description,
}) => (
  <div>
    <Label>{title}</Label>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default AppointmentInfo;
