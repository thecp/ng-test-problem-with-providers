import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<button type="button" (click)="doSomething()">click</button>`,
  providers: [AlertService], // <-- Here is the problem
})
export class AppComponent {
  constructor(private alertService: AlertService) {}

  doSomething() {
    this.alertService.alert('I am working');
  }
}
