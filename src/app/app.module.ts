import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointablesComponent } from './appointables/appointables.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppointableComponent } from './appointables/appointable/appointable.component';
import { ViewslotsComponent } from './viewslots/viewslots.component';
import { ViewslotComponent } from './viewslots/viewslot/viewslot.component';
import { AppointablesModule } from './appointables/appointables.module';
import { ViewslotsModule } from './viewslots/viewslots.module';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { BookappointmentModule } from './bookappointment/bookappointment.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    AppointablesModule,
    ViewslotsModule,
    BookappointmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
