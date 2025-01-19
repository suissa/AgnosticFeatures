
import { CloseButton  } from "../../../atoms/CloseButton"
import ModalTitle from "../atoms/ModalTitle"
import { ModalHeaderProps } from "../types/ModalHeaderProps"

export const ModalHeader = ({ children, onClose }: ModalHeaderProps) => (
  <div className="flex items-center justify-between p-4 border-b">
    <ModalTitle>{children}</ModalTitle>
    <CloseButton
      onClick={onClose}
      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
      aria-label="Fechar"
    >
    </CloseButton>
  </div>
)