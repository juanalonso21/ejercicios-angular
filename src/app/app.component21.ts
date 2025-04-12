// Ejercicio 21: Pipes
import {Component} from '@angular/core';
import {LowerCasePipe, UpperCasePipe} from '@angular/common'; // En este caso uso pipes que son funciones de angular que nos sirven para transformar datos a la hora de mostrarlos tambien se puede crear pipes personalizados pero en este caso yo uso los de angular

@Component({
  selector: 'app-root',
  template: `
    {{ username | lowercase }}
    <br />
    {{ username | uppercase }}
    <br />
    {{ username  }}
  `,
  imports: [LowerCasePipe, UpperCasePipe],
})
export class AppComponent {
  username = 'JuAnAlOnSo';
}