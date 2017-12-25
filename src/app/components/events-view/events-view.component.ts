import { Component, OnInit } from '@angular/core';
import {CalenderService} from '../../services/calender.service';
import {Observable} from 'rxjs/Observable';
import {IEvent} from '../../interfaces/i-event';

@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.scss']
})
export class EventsViewComponent implements OnInit {


  events$: Observable<IEvent[]>;
  constructor(
    private calenderService: CalenderService
  ) { }

  ngOnInit() {


    this.calenderService.setEvents();
    this.events$ = this.calenderService.events$;

  }



}
