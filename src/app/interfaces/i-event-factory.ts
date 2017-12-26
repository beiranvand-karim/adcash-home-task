import {IEvent} from './i-event';

export interface IEventFactory {

  constructEvent(title: string, description: string, date: Date): IEvent;
}
