// Ejercicio 8
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>El nombre del usuario es: {{ nombre }}</p>
  `,
})
export class UserComponent {
  @Input() nombre = '';
}