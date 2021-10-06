import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
    <h1>{{ counter }}</h1>
    <button (click)="onDec()">-</button>
    <button (click)="onInc()">+</button>
  `
})
export class MyCompComponent {
  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();

  onDec() {
    this.counterChange.emit(this.counter - 1);
  }

  onInc() {
    this.counterChange.emit(this.counter + 1);
  }
}
