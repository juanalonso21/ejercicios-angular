import {Component} from '@angular/core';
import {UserComponent} from './user.component11';
@Component({
  selector: 'app-root',
  template: `
    <app-user/>
  `,
  imports: [UserComponent],

})
export class AppComponent {}