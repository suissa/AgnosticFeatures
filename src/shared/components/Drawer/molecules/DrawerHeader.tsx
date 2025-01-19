import React from 'react';
import { CloseButton } from '../../../atoms/CloseButton'

interface DrawerHeaderProps {
  title?: string;
  onClose?: () => void;
  className?: string;
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({ 
  title, 
  onClose,
  className = ''
}) => (
  <div className={`flex justify-between items-center ${className}`}>
    <h2 className="text-xl font-semibold">{title}</h2>
    <CloseButton onClick={onClose} />
  </div>
);