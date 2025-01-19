import React from "react";

interface TimeSlotProps {
  time: string;
  description: string;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, description }) => (
  <div className="flex items-center justify-between p-2 border-b">
    <span className="text-sm font-medium text-gray-800">{time}</span>
    <span className="text-sm text-gray-600">{description}</span>
  </div>
);

export default TimeSlot;
