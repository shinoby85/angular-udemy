import {Selector} from "@ngrx/store";

export const selectCount: Selector<{ counter: number }, number> = (state) => state.counter;

export const selectMultipleCounter: Selector<{ counter: number }, number> = (state) => state.counter * 2;
