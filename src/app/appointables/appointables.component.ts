import { Component, OnInit } from '@angular/core';
import { AppointablesService } from './appointables.service';
import { Appointable } from 'src/types/Appointable';

@Component({
  selector: 'app-appointables',
  templateUrl: './appointables.component.html',
  styleUrls: ['./appointables.component.css']
})
export class AppointablesComponent implements OnInit {
loadNext() {
  console.log("Loading Next");
  this.pageNum = this.pageNum+1;
  this.appointableService.getAppointables(this.pageNum, this.pageSize).subscribe((data)=>this.appointables = data);
}
loadPrevious() {
  this.pageNum = this.pageNum-1;
  this.appointableService.getAppointables(this.pageNum, this.pageSize).subscribe((data)=>this.appointables = data);
}

  appointables:Appointable[] = [];
  pageNum:number=0;
  pageSize:number=5;
  constructor(private appointableService:AppointablesService) { }

  ngOnInit(): void {
    this.appointableService.getAppointables(this.pageNum, this.pageSize).subscribe((data) => this.appointables = data);
  }

}
