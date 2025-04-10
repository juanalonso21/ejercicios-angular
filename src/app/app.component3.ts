// Ejercicio 3 Crea un componente que llame a otro
import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
  styles: `
    :host {
      color:rgb(0, 4, 255);
    }
  `,
})
export class UserComponent {
  username = 'Juan Alonso';
}

@Component({
  selector: 'app-root',
  template: `
    <section>
      <app-user />
    </section>
  `,
  imports: [UserComponent],
})
export class AppComponent {}

