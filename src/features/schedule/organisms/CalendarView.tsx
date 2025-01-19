import React from "react";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { AppointmentEvent } from "../types/AppointmentEvent";

const locales = { "pt-BR": ptBR };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface CalendarViewProps {
  events: AppointmentEvent[];
  onSelectEvent: (event: AppointmentEvent) => void;
}
// eslint-disable-next-line
const Calendar = BigCalendar as any;
const formats = {
  monthHeaderFormat: 'MMMM yyyy',
  dayHeaderFormat: 'cccc',
  dayRangeHeaderFormat: ({ start, end }: { start: Date; end: Date }) =>
    `${format(start, 'dd/MM', { locale: ptBR })} - ${format(end, 'dd/MM', { locale: ptBR })}`,
  eventTimeRangeFormat: ({ start, end }: { start: Date; end: Date }) =>
    `${format(start, 'HH:mm', { locale: ptBR })} - ${format(end, 'HH:mm', { locale: ptBR })}`,
  timeGutterFormat: (date: Date) => format(date, 'HH:mm', { locale: ptBR }),
  agendaDateFormat: (date: Date) => format(date, 'dd/MM/yyyy', { locale: ptBR }),
  agendaTimeFormat: (date: Date) => format(date, 'HH:mm', { locale: ptBR }),
  agendaTimeRangeFormat: ({ start, end }: { start: Date; end: Date }) =>
    `${format(start, 'HH:mm', { locale: ptBR })} - ${format(end, 'HH:mm', { locale: ptBR })}`,
  weekdayFormat: (date: Date) => format(date, 'cccc', { locale: ptBR }).charAt(0).toUpperCase() + format(date, 'cccc', { locale: ptBR }).slice(1),
};
const CalendarView: React.FC<CalendarViewProps> = ({
  events,
  onSelectEvent,
}) => (
  <Calendar
    localizer={localizer}
    events={events}
    formats={formats}
    messages={{
      next: "Próximo",
      previous: "Anterior",
      today: "Hoje",
      month: "Mês",
      week: "Semana",
      day: "Dia",
      showMore: (total: unknown) => `+${total} mais`,
      date: "Data",
      time: "Hora",
      event: "Evento",
      allDay: "Dia inteiro",
      work_week: "Semana de trabalho",
      yesterday: "Ontem",
      tomorrow: "Amanhã",
      agenda: "Agenda",
    }}
    views={["month", "week", "day"]}
    culture='pt-BR'
    startAccessor="start"
    endAccessor="end"
    defaultView="week"
    style={{ height: "100vh" }}
    onSelectEvent={onSelectEvent}
  />
);

export default CalendarView;
