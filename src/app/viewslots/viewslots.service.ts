import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Slot } from 'src/types/Slot';

@Injectable({
  providedIn: 'root'
})
export class ViewslotsService {
  constructor(private http: HttpClient) { }
  getSlots(appointable_id:string){
    return this.http.get<Slot[]>("http://localhost:8080/appointments/?appointable_id="+appointable_id);
  }
}
