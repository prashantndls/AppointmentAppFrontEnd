import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppointablesComponent } from './appointables.component';
import { AppointableComponent } from './appointable/appointable.component';
import { RouterModule } from '@angular/router';
import { AppointablesService } from './appointables.service';



@NgModule({
  declarations: [ 
    AppointableComponent,AppointablesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    HttpClientModule
  ],
  providers:[AppointablesService]
})
export class AppointablesModule { }
