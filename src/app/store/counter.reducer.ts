import {createReducer, on} from "@ngrx/store";
import {decrement, increment, myValue} from "./counter.action";

const initialState = 0;

export const counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(myValue, (state, {value}) => state + value),
);

//Old variant
// export function counterReducer(state = initialState) {
//   return state
// }
