interface CloseButtonProps {
  onClick?: () => void;
  className?: string;
}

import { CloseIcon } from "../../../icons/CloseIcon";

export const CloseButton = ({ onClick, className = "" }: CloseButtonProps) => (
  <button
    onClick={onClick}
    className={`p-2 hover:bg-gray-100 rounded-full ${className}`}
  >
    <CloseIcon className="w-5 h-5" />
  </button>
);
