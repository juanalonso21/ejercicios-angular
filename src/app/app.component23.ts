// Ejercicio 23: Pipe personalizado
import {Component} from '@angular/core';
import {ReversePipe} from './pipes/reverse.pipe';

@Component({
  selector: 'app-root',
  template: `
    Frase al reves: {{ frase | reverse }}
  `,
  imports: [ReversePipe],
})
export class AppComponent {
  frase = 'El pipe esta funcionando en angular';
}