import {Component, inject, OnInit, signal} from '@angular/core';

import {Place} from '../place.model';
import {PlacesComponent} from '../places.component';
import {PlacesContainerComponent} from '../places-container/places-container.component';
import {HttpClient} from "@angular/common/http";
import {PlacesService} from "../places.service";

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  placesService = inject(PlacesService);
  isFetching = signal(false);
  error = signal('');
  httpClient = inject<HttpClient>(HttpClient);

  ngOnInit() {
    this.isFetching.set(true);
    this.placesService.loadAvailablePlaces()
      .subscribe(places => {
        this.places.set(places);
        this.isFetching.set(false);
      }, (error: Error) => {
        this.error.set(error.message);
      })

  }

  onSelectPlace(selectedPlace: Place) {
    this.placesService.addPlaceToUserPlaces(selectedPlace.id).subscribe();
  }
}
