import {Component, OnInit, signal} from '@angular/core';
import {toObservable} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount)

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
  }
}
