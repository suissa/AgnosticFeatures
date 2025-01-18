// index.tsx ou Drawer.tsx
import React from "react";
import { DrawerBackdrop } from "./atoms/DrawerBackdrop";
import { DrawerContainer } from "./organisms/DrawerContainer";

interface DrawerProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  title,
  children,
  className = "",
}) => {
  return (
    <>
      <DrawerBackdrop show={open} onClick={onClose} />
      <DrawerContainer
        open={open}
        onClose={onClose}
        title={title}
        className={className}
      >
        {children}
      </DrawerContainer>
    </>
  );
};
