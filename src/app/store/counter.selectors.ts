import {createSelector, Selector} from "@ngrx/store";

export const selectCount: Selector<{ counter: number }, number> = (state) => state.counter;

export const selectMultipleCounter = createSelector(
  selectCount,
  (state) => state * 2
);
