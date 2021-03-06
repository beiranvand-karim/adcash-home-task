import {Component, OnInit} from '@angular/core';
import {CalenderService} from './services/calender.service';
import {Observable} from 'rxjs/Observable';
import {UserInterfaceService} from './services/user-interface.service';
import {Month} from './classes/month';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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
