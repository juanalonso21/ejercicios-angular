//Aqui lo que hago es declarar el servicio y exportarlo para poder usarlo en el componente con Injectable puedo injectarlo en otro componente
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Mercedes clase A', 'Seat cordoba', 'Audi A3'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}
