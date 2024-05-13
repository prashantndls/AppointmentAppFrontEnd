import { Injectable } from '@angular/core';
import { Appointable } from 'src/types/Appointable';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppointablesService {

  
  constructor(private http: HttpClient) { }
  getAppointables(pageNumber:number, pageSize:number){
    
    let appointables: Appointable[] = [];
    return this.http.get<Appointable[]>("http://localhost:8080/appointables/?pageNum="+pageNumber+"&pageSize="+pageSize);
  }
}
