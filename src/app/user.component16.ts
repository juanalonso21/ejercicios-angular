// Ejercicio 16: Crear un componente que muestre el nombre de usuario y permita al usuario ingresar su framework favorito. Al hacer clic en un botón, se debe mostrar una alerta con el framework favorito ingresado.
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
})
export class UserComponent {
  favoriteFramework = '';
  username = 'Juan Alonso';

  showFramework() {
    alert(this.favoriteFramework);
  }
}