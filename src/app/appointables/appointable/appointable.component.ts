import { Component, Input, OnInit } from '@angular/core';
import { Appointable } from 'src/types/Appointable';

@Component({
  selector: 'app-appointable',
  templateUrl: './appointable.component.html',
  styleUrls: ['./appointable.component.css']
})
export class AppointableComponent implements OnInit {

  @Input() appointable:Appointable = {} as Appointable
  constructor() { }

  ngOnInit(): void {
  }

}
