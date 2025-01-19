import React from 'react';
import CalendarView from '../organisms/CalendarView';
import AppointmentDrawer from '../organisms/AppointmentDrawer';
import { AppointmentEvent } from '../types/AppointmentEvent';

interface ScheduleTemplateProps {
  appointments: AppointmentEvent[];
  selectedAppointment: AppointmentEvent | null;
  onSelectEvent: (event: AppointmentEvent) => void;
  onCloseDrawer: () => void;
}

const ScheduleTemplate: React.FC<ScheduleTemplateProps> = ({
  appointments,
  selectedAppointment,
  onSelectEvent,
  onCloseDrawer,
}) => (
  <div className="h-screen">
    <CalendarView events={appointments} onSelectEvent={onSelectEvent} />
    <AppointmentDrawer open={!!selectedAppointment} onClose={onCloseDrawer} appointment={selectedAppointment} />
  </div>
);

export default ScheduleTemplate;
