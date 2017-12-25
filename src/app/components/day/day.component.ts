import {Component, Input, OnInit} from '@angular/core';
import {CalenderService} from '../../services/calender.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Input() day;
  @Input() events;
  constructor(
    private calenderService: CalenderService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToEventsView(day: number) {

    this.calenderService.setCurrentDay(day);

    this.router.navigate([`/events`]).then(null);
  }

}
