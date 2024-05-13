import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewslotsService } from '../viewslots/viewslots.service';
import { BookappointmentService } from './bookappointment.service';
import { Slot } from 'src/types/Slot';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {

  appointment:Slot={} as Slot;
  constructor(private route: ActivatedRoute, private bookAppointment: BookappointmentService ) { }

  ngOnInit(): void {
    const slot_id_string = this.route.snapshot.paramMap.get("slot_id");
    console.log(slot_id_string);
      if(slot_id_string!=null)
        this.bookAppointment.bookAppointment(slot_id_string).subscribe((data)=> {this.appointment = data;console.log(data);});      
  }

}
