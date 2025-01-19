import { useState } from "react";
import ScheduleTemplate from "../templates/ScheduleTemplate";
import { getAppointments } from "../services/appointmentsService";
import { AppointmentEvent } from "../types/AppointmentEvent";

const SchedulePage = () => {
  const [appointments] = useState<AppointmentEvent[]>(getAppointments());
  const [selectedAppointment, setSelectedAppointment] =
    useState<AppointmentEvent | null>(null);

  return (
    <ScheduleTemplate
      appointments={appointments}
      selectedAppointment={selectedAppointment}
      onSelectEvent={(event) => setSelectedAppointment(event)}
      onCloseDrawer={() => setSelectedAppointment(null)}
    />
  );
};

export default SchedulePage;
