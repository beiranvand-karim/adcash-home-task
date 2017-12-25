import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Month} from '../../classes/month';
import {CalenderService} from '../../services/calender.service';
import {UserInterfaceService} from '../../services/user-interface.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {


  days$: Observable<Array<number>>;

  addEventVisibility$: Observable<boolean>;

  currentYear$: Observable<number>;

  currentMonth$: Observable<number>;

  constructor(
    private calenderService: CalenderService,
    private userInterfaceService: UserInterfaceService
  ) {

  }

  ngOnInit(): void {

    this.currentMonth$ = this.calenderService.currentMonthNumber$;
    this.currentYear$ = this.calenderService.currentYear$;
    this.days$ = this.calenderService.days$;
    this.addEventVisibility$ = this.userInterfaceService.addEventVisibility$;

  }

  getMonthName(index) {

    return Month.MonthByIndex(index);

  }

  getEvents(day: number) {
    return this.calenderService.getEventsCount(day);
  }

  addEventButtonClicked() {
    this.userInterfaceService.toggleAddEvent();
  }

  previousMonth() {

    this.calenderService.getPreviousMonth();

  }

  nextMonth() {

    this.calenderService.getNextMonth();

  }
}
