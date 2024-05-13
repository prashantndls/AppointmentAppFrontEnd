import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewslotsComponent } from './viewslots.component';
import { ViewslotComponent } from './viewslot/viewslot.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ViewslotsService } from './viewslots.service';



@NgModule({
  declarations: [ ViewslotsComponent, ViewslotComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    HttpClientModule
  ],
  providers:[ViewslotsService]
})
export class ViewslotsModule { }
