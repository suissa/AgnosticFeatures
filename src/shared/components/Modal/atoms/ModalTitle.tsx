import { ModalTitleProps } from "../types/ModalTitleProps";

const ModalTitle = ({ children }: ModalTitleProps) => (
  <h2 className="text-xl font-semibold text-gray-800">{children}</h2>
);

export default  ModalTitle;
