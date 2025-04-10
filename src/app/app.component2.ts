// Ejercicio 2: Crear un componente que tenga llamadas dentro del template a propiedades y métodos de la clase del componente.
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Hello {{ city }}, {{ 24 + 10 -20 }}
  `,
})
export class AppComponent {
  city = 'Pulpi';
}

