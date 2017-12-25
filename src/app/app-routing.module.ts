import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddEventFormComponent} from './components/add-event-form/add-event-form.component';
import {EventsViewComponent} from './components/events-view/events-view.component';
import {CalenderComponent} from './components/calender/calender.component';

const routes: Routes = [
  {
    path: 'add-event', component: AddEventFormComponent, pathMatch: 'full'
  },
  {
    path: 'events', component: EventsViewComponent, pathMatch: 'full'
  },
  {
    path: '', component: CalenderComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
