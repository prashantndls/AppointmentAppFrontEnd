import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppointmentRequest } from 'src/types/AppointmentRequest';
import { Slot } from 'src/types/Slot';

@Injectable({
  providedIn: 'root'
})
export class BookappointmentService {
  constructor(private http: HttpClient) { }
  bookAppointment(slot_id:string){
    const appointmentRequest:AppointmentRequest = {
      "slot": {
        "id": slot_id,
      },
      "email":"takenfromauth@xyz.com"
    }
    return this.http.post<Slot>("http://localhost:8080/appointments/", appointmentRequest);
  }
}
