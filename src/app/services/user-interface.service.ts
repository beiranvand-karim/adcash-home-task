import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserInterfaceService {


  addEventSubject = new BehaviorSubject<boolean>(false);
  addEventVisibility$ = this.addEventSubject.asObservable();
  constructor() { }


  showAddEvent() {
    this.addEventSubject.next(true);
  }

  hideAddEvent() {
    this.addEventSubject.next(false);
  }

  toggleAddEvent() {
    this.addEventSubject.next(!this.addEventSubject.getValue());
  }

}
