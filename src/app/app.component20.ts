// Ejercicio 20
import {Component, inject} from '@angular/core';
import {CarService} from './services/car.service';

@Component({
  selector: 'app-root',
  template: `
    <p>Coches: {{ mostrar }}</p>
  `,
})
export class AppComponent {
  private carService = inject(CarService);

  mostrar = this.carService.getCars().join(' , ');
}