import { useState } from "react";
import { Modal } from "..";
import { Button } from "../../../atoms/Button";

const ModalExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="p-4">
      <Button onClick={() => setIsModalOpen(true)}>Abrir Modal</Button>

      { isModalOpen && 
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Exemplo de Modal"
        >
          <div className="space-y-4">
            <p>Conteúdo do modal aqui...</p>

            <div className="flex justify-end space-x-2">
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => console.log("Confirmar")}>Confirmar</Button>
            </div>
          </div>
        </Modal>
      }
    </div>
  );
};

export default ModalExample;
