// Ejercicio 7: Crear un componente que reaccione al evento mouseover
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div (mouseover)="onMouseOver()">
      Mensaje secreto:
      {{ message }}
</div>
  `,
})
export class AppComponent {
  message = '';

  onMouseOver() {
    this.message = 'secreto';
  }
}