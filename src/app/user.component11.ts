//Ejercicio 11: Usar ngSrc para optimizar imagenes en Angular y donde se declaran
import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Imagen estatica:
        <img ngSrc="logo.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Imagen dinamica:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
})
export class UserComponent {
  logoUrl = 'logo.svg';
  logoAlt = 'Angular logo';
  username = 'juan';
}