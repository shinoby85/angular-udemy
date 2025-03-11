const initialState = 0;

// export const counterReducer = createReducer(
//   initialState,
//   on(increment, state => state + 1),
//   on(decrement, state => state - 1),
//   on(myValue, (state, action) => state + action.value),
// );

//Old variant
export function counterReducer(state = initialState, action: { type: string; value: number }) {
  switch (action.type) {
    case '[Counter] Increment':
      return state + 1;
    case '[Counter] Decrement':
      return state - 1;
    case '[Counter] MyValue':
      return state + action.value;
  }
  return state
}
