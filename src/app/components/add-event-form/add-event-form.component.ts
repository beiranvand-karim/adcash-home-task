import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CalenderService} from '../../services/calender.service';
import {UserInterfaceService} from '../../services/user-interface.service';
import {EventFactorySingleton} from '../../classes/event-factory';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.scss']
})
export class AddEventFormComponent implements OnInit {

  form: FormGroup;

  title = new FormControl('', [Validators.required, Validators.minLength(1)]);
  description = new FormControl();
  date = new FormControl('', [Validators.required, Validators.minLength(10)]);
  time = new FormControl();



  constructor(
    private formBuilder: FormBuilder,
    private calenderService: CalenderService,
    private userInterfaceService: UserInterfaceService,
  ) {

    this.form = this.formBuilder.group({
      title: this.title,
      description: this.description,
      date: this.date,
      time: this.time,
    });
  }

  ngOnInit() {
  }

  buttonCancelClicked() {
    this.userInterfaceService.hideAddEvent();
  }

  onSubmit() {

    this.userInterfaceService.hideAddEvent();

    const controls = this.form.controls;


    const date = new Date(controls.date.value);

    if (controls.time.value) {
      date.setHours( <number> controls.time.value.split(':')[0]);
      date.setMinutes( <number> controls.time.value.split(':')[1]);
    }

    const event = EventFactorySingleton
      .eventFactorySingletonInstance
      .constructEvent(controls.title.value, controls.description.value, date);

    this.calenderService.setEventsCollection(event);

  }

}
