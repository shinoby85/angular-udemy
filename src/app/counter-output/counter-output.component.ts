import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {selectCount, selectMultipleCounter} from "../store/counter.selectors";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [
    AsyncPipe
  ]
})
export class CounterOutputComponent {
  counter$: Observable<number> = this.store.pipe(select(selectCount));
  multipleCount$: Observable<number> = this.store.pipe(select(selectMultipleCounter));

  constructor(private store: Store<{ counter: number }>) {
    // this.counter$ = this.store.select('counter');
  }
}
