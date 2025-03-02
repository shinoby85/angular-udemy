import {Component, DestroyRef, inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // interval?: ReturnType<typeof setInterval>;

  private _destroyRef = inject(DestroyRef)

  ngOnInit() {
    const intervalId = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
    this._destroyRef.onDestroy(() => {
      clearInterval(intervalId);
    })
  }

  // ngOnDestroy() {
  //   clearInterval(this.interval);
  // }
}
