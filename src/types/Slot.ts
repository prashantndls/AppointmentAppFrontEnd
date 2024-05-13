import { Appointable } from "./Appointable";

export interface Slot{
    id:number;
    appointable: Appointable;
    from:string;
    to:string;
    bookedTo:string;
  }