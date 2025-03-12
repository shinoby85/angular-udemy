import {Actions, createEffect, ofType} from "@ngrx/effects";
import {myValue} from "./counter.action";
import {tap, withLatestFrom} from "rxjs";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectCount} from "./counter.selectors";

@Injectable()
export class CounterEffects {
  saveCounter = createEffect(() => this.actions$.pipe(
    ofType(myValue),
    withLatestFrom(this.store$.select(selectCount)),
    tap(([action, counter]) => {
      console.log(action);
      console.log(counter);
      localStorage.setItem('count', action.value.toString());
    })
  ), {dispatch: false})

  constructor(private actions$: Actions, private store$: Store<{ counter: number }>) {
  }
}
