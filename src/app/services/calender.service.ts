import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {EventsCollectionSingleton} from '../classes/events-collection';
import {IEvent} from '../interfaces/i-event';
import {Month} from '../classes/month';

@Injectable()
export class CalenderService {


  eventsCollectionSubject = new BehaviorSubject<EventsCollectionSingleton>(EventsCollectionSingleton.collection);
  eventsCollection$ = this.eventsCollectionSubject.asObservable();

  currentMonthNumberSubject = new BehaviorSubject<number>((new Date).getMonth());
  currentMonthNumber$ = this.currentMonthNumberSubject.asObservable();

  currentYearSubject = new BehaviorSubject<number>((new Date).getFullYear());
  currentYear$ = this.currentYearSubject.asObservable();

  currentDaySubject = new BehaviorSubject<number>((new Date).getDate());
  currentDay$ = this.currentDaySubject.asObservable();

  daysSubject = new BehaviorSubject<Array<number>>(this.getDays());
  days$ = this.daysSubject.asObservable();


  eventsSubject = new BehaviorSubject<IEvent[]>([]);
  events$ = this.eventsSubject.asObservable();


  constructor() {
    this.currentMonthNumberSubject.subscribe((month) => {

      const days = this.getDays(month);
      this.daysSubject.next(days);

    });
  }

  getCurrentDay() {
    return this.currentDaySubject.getValue();
  }

  setCurrentDay(day: number) {
    this.currentDaySubject.next(day);
  }

  getCurrentMonth() {
    return this.currentMonthNumberSubject.getValue();
  }
  getCurrentYear(): number {
    return this.currentYearSubject.getValue();
  }

  setEvents(): void {
    this.eventsSubject.next(this.getEvents());
  }

  getEvents(): IEvent[] {

    const date = new Date(this.currentYearSubject.getValue(), this.currentMonthNumberSubject.getValue(), this.currentDaySubject.getValue());

    return this.eventsCollectionSubject.getValue().findEventsByDate(date);
  }

  getEventsCount(day: number): number {

    const date = new Date(this.currentYearSubject.getValue(), this.currentMonthNumberSubject.getValue(), day);


     return this.eventsCollectionSubject.getValue().findEventByDateCount(date);

  }

  getDays(month?: number) {

    const temp = month ? month : this.currentMonthNumberSubject.getValue();

    const days = Array
      .from(Array(Month.indexToMonthType(temp).daysCount).keys())
      .map(day => day + 1);

    return days;

  }

  getNextMonth() {
    const temp = this.currentMonthNumberSubject.getValue() + 1;
    if (temp === 12) {
      this.inceaseYear();
    }
    this.currentMonthNumberSubject.next(temp === 12 ? 0 : temp);

  }

  inceaseYear() {
    this.currentYearSubject.next(this.currentYearSubject.getValue() + 1);
  }

  decreaseYear() {
    this.currentYearSubject.next(this.currentYearSubject.getValue() - 1);
  }

  getPreviousMonth() {
    const temp = this.currentMonthNumberSubject.getValue() - 1;
    if (temp === -1) {
      this.decreaseYear();
    }
    this.currentMonthNumberSubject.next(temp === -1 ? 11 : temp);
  }

  public get getEventsCollection() {
    return this.eventsCollectionSubject.getValue();
  }

  public setEventsCollection(event: IEvent) {

    const temp = this.eventsCollectionSubject.getValue();
    temp.addEvent(event);
    this.eventsCollectionSubject.next(temp);

  }
}
