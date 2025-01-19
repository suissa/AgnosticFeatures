import { useEffect } from "react";
import { ModalHeader } from "./molecules/ModalHeader";
import { ModalProps } from "./types/ModalProps";

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen, onClose]);

  // Handler para fechar quando clicar fora
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className={`
          relative z-50 w-full max-w-lg bg-white rounded-lg shadow-xl
          transform transition-all duration-300
          ${isOpen ? "scale-100 opacity-100" : "scale-95"}
          ${className}
        `}
      >
        <ModalHeader onClose={onClose}>{title}</ModalHeader>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
