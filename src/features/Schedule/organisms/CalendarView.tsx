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

const CalendarView: React.FC<CalendarViewProps> = ({
  events,
  onSelectEvent,
}) => (
  <Calendar
    localizer={localizer}
    events={events}
    startAccessor="start"
    endAccessor="end"
    defaultView="week"
    views={["month", "week", "day"]}
    style={{ height: "100vh" }}
    onSelectEvent={onSelectEvent}
  />
);

export default CalendarView;
