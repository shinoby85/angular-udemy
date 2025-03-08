import {inject, Injectable, signal} from '@angular/core';

import {Place} from './place.model';
import {catchError, map, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "../shared/error.service";

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);
  private errorService = inject(ErrorService);
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'places',
      'Something went wrong fetching the available places. Please try again later.'
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'user-places',
      'Something went wrong fetching your favorite places. Please try again later.'
    )
      .pipe(
        tap((userPlaces: Place[]) => {
          this.userPlaces.set(userPlaces)
        })
      );
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlace = this.userPlaces();
    if (!prevPlace.some((p) => p.id === place.id)) {
      this.userPlaces.update(prevPlaces => [...prevPlaces, place]);
    }
    return this.httpClient.put('http://localhost:3000/user-places', {
      placeId: place.id,
    }).pipe(
      catchError(err => {
        this.userPlaces.set(prevPlace);
        this.errorService.showError('Failed to store selected place.');
        return throwError(() => new Error('Failed to store selected place.'))
      }),
    );
  }

  removeUserPlace(place: Place) {
    const prevPlace = this.userPlaces();
    this.userPlaces.update(prevPlaces => prevPlaces.filter((p) => p.id !== place.id));
    return this.httpClient.delete('http://localhost:3000/user-places/' + place.id).pipe(
      catchError(err => {
        this.userPlaces.set(prevPlace);
        this.errorService.showError('Failed to remove user place.');
        return throwError(() => new Error('Failed to remove place.'));
      })
    )
  }

  private fetchPlaces(urlSlug: string, errorMessage: string) {
    return this.httpClient.get<{ places: Place[] }>(`http://localhost:3000/${urlSlug}`)
      .pipe(
        map((respData: { places: Place[] }) => respData.places),
        catchError(err =>
          throwError(() =>
            new Error(errorMessage)
          )
        ),
      )
  }
}
