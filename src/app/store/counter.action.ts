import {Action, createAction} from "@ngrx/store";

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
// export const myValue = createAction('[Counter] MyValue', props<{ value: number }>());

export const MY_INCREMENT = '[Counter] MyValue';

//Old version
export class MyIncrement implements Action {
  type: string = MY_INCREMENT;

  constructor(public value: number) {
  }
}

export type CounterAction = MyIncrement;
