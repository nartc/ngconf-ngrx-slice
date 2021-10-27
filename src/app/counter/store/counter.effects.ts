import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { CounterActions, CounterSelectors } from "./counter.slice";

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions, private store: Store) {}

  readonly multiplyBy = createEffect(() =>
    this.actions$.pipe(
      ofType(CounterActions.multiplyBy.trigger),
      concatLatestFrom(() => this.store.select(CounterSelectors.selectValue)),
      switchMap(([{ multiplier }, currentValue]) =>
        timer(1500).pipe(
          map(() =>
            CounterActions.multiplyBy.success({
              value: multiplier * currentValue,
            })
          )
        )
      )
    )
  );
}
