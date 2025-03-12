import {Actions, createEffect, ofType} from "@ngrx/effects";
import {myValue} from "./counter.action";
import {tap} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class CounterEffects {
  saveCounter = createEffect(() => this.actions$.pipe(
    ofType(myValue),
    tap((action) => {
      console.log(action);
      localStorage.setItem('count', action.value.toString());
    })
  ), {dispatch: false})

  constructor(private actions$: Actions) {
  }
}
