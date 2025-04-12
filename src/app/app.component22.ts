// Ejercicio 22: Pipes para que actuen como capas anti corrupcion
import {Component} from '@angular/core';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Numero con decimales (number) {{ num | number : '3.2-2' }}</li> // Aqui le digo que me muestre el numero con 3 digitos y 2 decimales min y max
      <li>Fecha usando date {{ birthday | date : 'medium' }}</li>
      <li>Coste usando currency {{ cost | currency }}</li> // Aqui le digo que me muestre el precio con el simbolo de la moneda
    </ul>
  `,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
})
export class AppComponent {
  num = 103.12341;
  birthday = new Date(2024, 4, 12);
  cost = 5432.22;
}