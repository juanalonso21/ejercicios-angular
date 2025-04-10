import {Component} from '@angular/core';
import {UserComponent} from './user.component8';

@Component({
  selector: 'app-root',
  template: `
    <app-user nombre="Juan Alonso" />
  `,
  imports: [UserComponent],
})
export class AppComponent {}