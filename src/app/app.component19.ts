// Ejercicio 19 injectar un servicio en el componente
import {Component, inject} from '@angular/core';
import {CarService} from './services/car.service19';

@Component({
  selector: 'app-root',
  template: '<p> {{ carService.getCars() }} </p>', //Aqui se muestra el array de coches que tenemos en el servicio
})
export class AppComponent {
  carService = inject(CarService); //Aqui inyecto el servicio para poder usarlo en el componente
}
