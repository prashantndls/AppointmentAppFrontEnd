import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointablesComponent } from './appointables/appointables.component';
import { ViewslotsComponent } from './viewslots/viewslots.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';

const routes: Routes = [{
  path:'',component:AppointablesComponent
},
{
  path:'viewslots/:appointable_id',component:ViewslotsComponent
},
{
  path:'bookslot/:slot_id',component:BookappointmentComponent
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
