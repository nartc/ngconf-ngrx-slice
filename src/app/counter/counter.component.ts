import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <button type="button" (click)="onDecrement()">-</button>
    <span>Count: {{ 0 }}</span>
    <button type="button" (click)="onIncrement()">+</button>
    <p>You have incremented: {{ 0 }} times</p>
    <p>You have decremented: {{ 0 }} times</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onDecrement() {}

  onIncrement() {}
}
