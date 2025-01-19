import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Drawer } from '../shared/components/Drawer';
import { Button } from '../shared/atoms/Button';

// Configuração do localizador para PT-BR
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

// Interface para os eventos/consultas
interface Appointment {
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

// Dados de exemplo
const appointments: Appointment[] = [
  {
    id: 1,
    title: "Consulta - João Silva",
    start: new Date(2024, 0, 19, 9, 0),
    end: new Date(2024, 0, 19, 10, 0),
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
    start: new Date(2024, 0, 19, 14, 0),
    end: new Date(2024, 0, 19, 15, 0),
    patient: {
      name: "Maria Santos",
      age: 32,
      condition: "Primeira Consulta - Depressão",
      history:
        "Primeira consulta. Paciente relata sintomas depressivos há 6 meses.",
      nextSteps: "Iniciar terapia semanal. Avaliação psiquiátrica recomendada.",
    },
  },
  // Adicione mais consultas conforme necessário
];

const Schedule = () => {
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSelectEvent = (event: Appointment) => {
    setSelectedAppointment(event);
    setIsDrawerOpen(true);
  };

  return (
    <div className="h-screen w-full p-4 bg-gray-50">
      <Calendar
        localizer={localizer}
        events={appointments}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 2rem)" }}
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
  );
};

export default Schedule;
