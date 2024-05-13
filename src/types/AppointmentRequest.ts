import { Slot } from "./Slot";

export interface AppointmentRequest{
    slot: {
      id: string;
    };
    email: string;
  }