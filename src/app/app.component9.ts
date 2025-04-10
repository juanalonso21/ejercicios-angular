// Ejercicio 9: Comunicación entre componentes padre e hijo con eventos
import {Component} from '@angular/core';
import {ChildComponent} from './child.component9';

@Component({
  selector: 'app-root',
  template: `
    <app-child (addItemEvent)="addItem($event)" />
    <p>Items: {{ items.length }}</p>
  `,
  imports: [ChildComponent],
})
export class AppComponent {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}