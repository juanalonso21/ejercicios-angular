//Ejercicio 4 Condicionales
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @if (isServerRunning) {
    <p>El servidor esta funcionando</p>
    } @else {
    <p>El servidor no esta funcionando</p>
    }
  `,
})
export class AppComponent {
  isServerRunning = false;
}
