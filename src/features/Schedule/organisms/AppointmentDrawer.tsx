import React from "react";
import AppointmentInfo from "../molecules/AppointmentInfo";
import { Button } from '../../../shared/atoms/Button'; // Import do botão compartilhado
import { AppointmentEvent } from "../types/AppointmentEvent";
import { Drawer } from "../../../shared/components/Drawer";

interface AppointmentDrawerProps {
  open: boolean;
  onClose: () => void;
  appointment: AppointmentEvent | null;
}

const AppointmentDrawer: React.FC<AppointmentDrawerProps> = ({
  open,
  onClose,
  appointment,
}) => {
  return (
    <Drawer open={open} onClose={onClose} title="Detalhes da Consulta">
      {appointment && (
        <div className="space-y-6">
          <AppointmentInfo
            title="Nome"
            description={appointment.patient.name}
          />
          <AppointmentInfo
            title="Idade"
            description={`${appointment.patient.age} anos`}
          />
          <AppointmentInfo
            title="Condição"
            description={appointment.patient.condition}
          />
          <AppointmentInfo
            title="Histórico"
            description={appointment.patient.history}
          />
          <AppointmentInfo
            title="Próximos Passos"
            description={appointment.patient.nextSteps}
          />

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

export default AppointmentDrawer;
