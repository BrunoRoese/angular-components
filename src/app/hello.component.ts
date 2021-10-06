import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <my-comp [(counter)]="counter"></my-comp>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  private _counter = 0;

  get counter(): number {
    return this._counter;
  }

  set counter(value: number) {
    this._counter = value;
    console.log(this._counter);
  }
}
