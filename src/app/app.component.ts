import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {toObservable, toSignal} from "@angular/core/rxjs-interop";
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, {initialValue: 0});
  destroyRef = inject(DestroyRef);

  customInterval$ = new Observable((subscriber) => {
    setInterval(() => {
      subscriber.next();
    }, 2000);
  });

  ngOnInit() {
    // interval(1000)
    //   .pipe(
    //     map(num => num * 2)
    //   )
    //   .subscribe({
    //     next: (value) => {
    //       console.log(value);
    //     },
    //     complete: () => {
    //     },
    //     error: () => {
    //     }
    //   });
    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => {
        console.log('COMPLETED!');
      },
    })
    const subscription = this.clickCount$.subscribe({
      next: value => console.log(`Clicked button ${this.clickCount()} times.`),
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}
