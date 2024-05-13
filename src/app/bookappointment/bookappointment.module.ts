import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookappointmentComponent } from './bookappointment.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { BookappointmentService } from './bookappointment.service';



@NgModule({
  declarations: [BookappointmentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [BookappointmentService]
})
export class BookappointmentModule { }
