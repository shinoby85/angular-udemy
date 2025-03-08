import {Component, inject, OnInit, signal} from '@angular/core';

import {Place} from '../place.model';
import {PlacesComponent} from '../places.component';
import {PlacesContainerComponent} from '../places-container/places-container.component';
import {HttpClient} from "@angular/common/http";
import {catchError, map, throwError} from "rxjs";

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  httpClient = inject<HttpClient>(HttpClient);

  ngOnInit() {
    this.isFetching.set(true);
    this.httpClient.get<{ places: Place[] }>('http://localhost:3000/places')
      .pipe(
        map((respData: { places: Place[] }) => respData.places),
        catchError(err => throwError(() => new Error('Something went wrong fetching the available places. Please try again later.'))),
      )
      .subscribe(places => {
        this.places.set(places);
        this.isFetching.set(false);
      }, (error: Error) => {
        this.error.set(error.message);
      })

  }
}
