import React from 'react';
import { DrawerHeader } from '../molecules/DrawerHeader';
interface DrawerContainerProps {
  open: boolean;
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
  title?: string
}

export const DrawerContainer: React.FC<DrawerContainerProps> = ({ 
  open, 
  children, 
  className = '',
  onClose,
  title = ''
}) => (
  <div
    className={`
      fixed top-0 right-0 z-50 h-full p-6
      w-[320px] md:w-[340px]
      bg-white shadow-lg transform 
      transition-transform duration-300 ease-out
      ${open ? 'translate-x-0' : 'translate-x-full'}
      ${className}
    `}
  >
    <div>
      <DrawerHeader title={title} onClose={onClose} />
    </div>
    <div>
      {children}
    </div>
  </div>
);