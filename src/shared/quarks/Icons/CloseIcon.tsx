import React from 'react';

interface CloseIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const CloseIcon: React.FC<CloseIconProps> = ({ 
  className = '', 
  size = 24,
  color = 'currentColor'
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={`lucide lucide-x ${className}`}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

export default CloseIcon;