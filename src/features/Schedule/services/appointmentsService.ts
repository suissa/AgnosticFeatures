import { AppointmentEvent } from "../types/AppointmentEvent";

export const getAppointments = (): AppointmentEvent[] => {
  return [
    {
      id: 1,
      title: "Consulta - João Silva",
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
      patient: {
        name: "João Silva",
        age: 45,
        condition: "Acompanhamento - Ansiedade",
        history: "Melhora nos sintomas após início da medicação.",
        nextSteps: "Continuar medicação atual. Reavaliação em 30 dias.",
      },
    },
  ];
};
