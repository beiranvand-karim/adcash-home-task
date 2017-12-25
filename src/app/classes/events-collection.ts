import {IEvent} from '../interfaces/i-event';


export class EventsCollectionSingleton {

  public static instance: EventsCollectionSingleton;

  events: IEvent[];

  private constructor(events: IEvent[] = []) {
    this.events = events;
  }

  static get collection() {

    if (this.instance === null || this.instance === undefined) {
      this.instance = new EventsCollectionSingleton();
    }

    return this.instance;

  }

  getEvents() {
    return this.events;
  }

  addEvent(event: IEvent): void {
    this.events.push(event);
  }

  findEventsByDate(day: Date): IEvent[] {

    const temp: IEvent[] = [];

    for (let i = 0; i < this.events.length; i ++ ) {

      if ( this.events[i].date.getFullYear() === day.getFullYear()
        &&  this.events[i].date.getMonth() === day.getMonth()
        && this.events[i].date.getDate() === day.getDate()) {
        temp.push(this.events[i]);

      }
    }

    return temp;
  }

  findEventByDateCount(day: Date): number {
    return this.findEventsByDate(day).length;
  }
}
