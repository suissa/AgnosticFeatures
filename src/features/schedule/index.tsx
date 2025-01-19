import React from "react";
import { Drawer } from "../../shared/components/Drawer";
import { Button } from "../../shared/atoms/Button";
import { AppointmentEvent } from "./types/AppointmentEvent";

interface ScheduleProps {
  open: boolean;
  onClose: () => void;
  selectedAppointment: AppointmentEvent | null;
}

const Schedule: React.FC<ScheduleProps> = ({
  open,
  onClose,
  selectedAppointment,
}) => {
  return (
    <Drawer open={open} onClose={onClose} title="Detalhes da Consulta">
      {selectedAppointment && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">
              {selectedAppointment.patient.name}
            </h3>
            <p className="text-gray-600">
              Idade: {selectedAppointment.patient.age} anos
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Condição</h4>
            <p className="text-gray-700">
              {selectedAppointment.patient.condition}
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Histórico</h4>
            <p className="text-gray-700">
              {selectedAppointment.patient.history}
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Próximos Passos</h4>
            <p className="text-gray-700">
              {selectedAppointment.patient.nextSteps}
            </p>
          </div>
          <div className="pt-4 space-y-2">
            <Button
              variant="primary"
              fullWidth
              onClick={() => console.log("Editar consulta")}
            >
              Editar Consulta
            </Button>
            <Button
              variant="danger"
              fullWidth
              onClick={() => console.log("Cancelar consulta")}
            >
              Cancelar Consulta
            </Button>
          </div>
        </div>
      )}
    </Drawer>
  );
};

export default Schedule;
