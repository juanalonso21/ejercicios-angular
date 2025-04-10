// Ejercicio 5: Bucle que recorre un array de objetos y muestra sus propiedades en el template
import {Component} from '@angular/core';
@Component({
    selector: 'app-root',
    template: `
      @for(user of users; track user.id) {
      <p>Usuario: {{ user.id }}, se llama {{ user.nombre }}</p>
      } 
    `,
  })
  export class AppComponent {
    users = [
      {id: 0, nombre: 'Juan'},
      {id: 1, nombre: 'Alonso'},
      {id: 2, nombre: 'Javier'},
      {id: 3, nombre: 'Pedro'},
      {id: 4, nombre: 'Pepe'},
    ];
  }
  