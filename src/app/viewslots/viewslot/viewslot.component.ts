import { Component, Input, OnInit } from '@angular/core';
import { Slot } from 'src/types/Slot';

@Component({
  selector: 'app-viewslot',
  templateUrl: './viewslot.component.html',
  styleUrls: ['./viewslot.component.css']
})
export class ViewslotComponent implements OnInit {


  @Input() slot:Slot = {} as Slot;

  constructor() { }

  ngOnInit(): void {
  }

}
