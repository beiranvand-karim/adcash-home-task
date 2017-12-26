import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Month} from '../../classes/month';
import {CalenderService} from '../../services/calender.service';
import {UserInterfaceService} from '../../services/user-interface.service';
import {NodeUtils} from '../../classes/node-utils';

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

  @ViewChild('popUp') popUp: ElementRef;
  @ViewChild('toggle') toggle: ElementRef;


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

  @HostListener('document:click', ['$event']) togglePopUpLink(event) {

    if (! NodeUtils.isDescendant(this.popUp.nativeElement, event.target) && event.target !== this.toggle.nativeElement) {
      this.userInterfaceService.hideAddEvent();
    }

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
