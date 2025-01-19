import React, { useState, forwardRef } from 'react';
// import { Calendar as BigCalendar, CalendarProps, dateFnsLocalizer } from 'react-big-calendar';
import { Calendar as BigCalendar} from "react-big-calendar";
import { dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Drawer } from '../shared/components/Drawer';
import { Button } from '../shared/atoms/Button';


// @ts-ignore
const Calendar = BigCalendar as unknown;

const locales = {
  "pt-BR": ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface AppointmentEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  patient: {
    name: string;
    age: number;
    condition: string;
    history: string;
    nextSteps: string;
  };
}

const appointments: AppointmentEvent[] = [
  {
    id: 1,
    title: "Consulta - João Silva",
    start: new Date(), // hoje
    end: new Date(new Date().setHours(new Date().getHours() + 1)), // 1 hora depois
    patient: {
      name: "João Silva",
      age: 45,
      condition: "Acompanhamento - Ansiedade",
      history:
        "Paciente relatou melhora nos sintomas após início da medicação. Mantém práticas de mindfulness.",
      nextSteps: "Continuar medicação atual. Reavaliação em 30 dias.",
    },
  },
  {
    id: 2,
    title: "Consulta - Maria Santos",
    start: new Date(new Date().setHours(14)), // hoje às 14h
    end: new Date(new Date().setHours(15)), // hoje às 15h
    patient: {
      name: "Maria Santos",
      age: 32,
      condition: "Primeira Consulta - Depressão",
      history:
        "Primeira consulta. Paciente relata sintomas depressivos há 6 meses.",
      nextSteps: "Iniciar terapia semanal. Avaliação psiquiátrica recomendada.",
    },
  },
];

const Schedule = () => {
  const [selectedAppointment, setSelectedAppointment] =
    useState<AppointmentEvent | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSelectEvent = (event: AppointmentEvent) => {
    setSelectedAppointment(event);
    setIsDrawerOpen(true);
  };

  return (
    <div className="h-screen w-full bg-gray-50 overflow-hidden">
      <div className="h-full">
      <Calendar
        localizer={localizer}
        events={appointments}
        startAccessor="start"
        endAccessor="end"
        style={{ 
          height: 'calc(100vh - 2rem)',
          maxWidth: '100%'
        }}
        onSelectEvent={handleSelectEvent}
        defaultView="week"
        views={["month", "week", "day"]}
        messages={{
          next: "Próximo",
          previous: "Anterior",
          today: "Hoje",
          month: "Mês",
          week: "Semana",
          day: "Dia",
        }}
      />

      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Detalhes da Consulta"
      >
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
    </div>
    </div>
  );
};

export default Schedule;
