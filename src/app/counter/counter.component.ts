import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CounterActions, CounterSelectors } from "./store/counter.slice";

@Component({
  selector: "app-counter",
  template: `
    <button type="button" (click)="onDecrement()">-</button>
    <span>Count: {{ value$ | async }}</span>
    <button type="button" (click)="onIncrement()">+</button>
    <p>You have incremented: {{ incrementCount$ | async }} times</p>
    <p>You have decremented: {{ decrementCount$ | async }} times</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  readonly value$ = this.store.select(CounterSelectors.selectValue);
  readonly incrementCount$ = this.store.select(
    CounterSelectors.selectIncrementCount
  );
  readonly decrementCount$ = this.store.select(
    CounterSelectors.selectDecrementCount
  );

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onDecrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  onIncrement() {
    this.store.dispatch(CounterActions.increment());
  }
}
