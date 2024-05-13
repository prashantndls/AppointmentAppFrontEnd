import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Slot } from 'src/types/Slot';
import { ViewslotsService } from './viewslots.service';

@Component({
  selector: 'app-viewslots',
  templateUrl: './viewslots.component.html',
  styleUrls: ['./viewslots.component.css']
})
export class ViewslotsComponent implements OnInit {


  slots: Slot[] = [];
  constructor(private route: ActivatedRoute, private viewSlotsService: ViewslotsService ) { }

  ngOnInit(): void {
      const appointable_id_string = this.route.snapshot.paramMap.get("appointable_id");
      if(appointable_id_string!=null)
        this.viewSlotsService.getSlots(appointable_id_string).subscribe((data)=> this.slots = data);      
  }

}
