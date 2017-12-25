import {IEvent} from '../interfaces/i-event';


export class Event implements IEvent {


  title: string;
  description: string;
  date: Date;

  constructor(title: string, description: string = '', date: Date = new Date()) {

    this.title = title;
    this.description = description;
    this.date = date;

  }

  getDate(): string {
    return `${this.date.getDay()} ${this.date.getMonth()} ${this.date.getFullYear()}`;

  }

  getTime(): string {
    return this.date.toTimeString().slice(0, 5);
  }

}
