export interface AppointmentEvent {
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
  