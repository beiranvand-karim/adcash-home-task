import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddEventFormComponent } from './components/add-event-form/add-event-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CalenderService} from './services/calender.service';
import { DayComponent } from './components/day/day.component';
import {UserInterfaceService} from './services/user-interface.service';
import { EventsViewComponent } from './components/events-view/events-view.component';
import { CalenderComponent } from './components/calender/calender.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEventFormComponent,
    DayComponent,
    EventsViewComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CalenderService,
    UserInterfaceService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
