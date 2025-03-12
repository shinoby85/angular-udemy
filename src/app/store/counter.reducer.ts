import {CounterAction, MY_INCREMENT} from "./counter.action";
import {Action} from "@ngrx/store";

const initialState = 0;

// export const counterReducer = createReducer(
//   initialState,
//   on(increment, state => state + 1),
//   on(decrement, state => state - 1),
//   on(myValue, (state, action) => state + action.value),
// );

//Old variant
export function counterReducer(state = initialState, action: CounterAction | Action) {
  switch (action.type) {
    case '[Counter] Increment':
      return state + 1;
    case '[Counter] Decrement':
      return state - 1;
    case MY_INCREMENT:
      return state + (action as CounterAction).value;
  }
  return state
}
