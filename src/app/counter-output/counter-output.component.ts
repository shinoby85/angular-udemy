import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {selectCount, selectMultipleCounter} from "../store/counter.selectors";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  counter$: Observable<number>;
  multipleCounter$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = this.store.select(selectCount);
    this.multipleCounter$ = this.store.select(selectMultipleCounter);
  }


}
