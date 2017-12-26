import {IEventFactory} from '../interfaces/i-event-factory';
import {IEvent} from '../interfaces/i-event';
import {Event} from './event';

export class EventFactorySingleton implements IEventFactory {

  public static instance: EventFactorySingleton;

  private constructor() {

  }

   constructEvent(title: string, description: string, date: Date): IEvent {
    return new Event(title, description, date);
  }


  static get eventFactorySingletonInstance() {

    if (this.instance === null || this.instance === undefined ) {
      this.instance = new EventFactorySingleton();
    }

    return this.instance;
  }

}
