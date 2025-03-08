import {Component, inject, OnInit, signal} from '@angular/core';

import {PlacesContainerComponent} from '../places-container/places-container.component';
import {PlacesComponent} from "../places.component";
import {PlacesService} from "../places.service";

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  isFetching = signal(false);
  error = signal('');
  placesService = inject(PlacesService);
  places = this.placesService.loadedUserPlaces;

  ngOnInit() {
    this.isFetching.set(true);
    this.placesService.loadUserPlaces()
      .subscribe(places => {
        this.isFetching.set(false);
      }, (error: Error) => {
        this.error.set(error.message);
      })

  }

}
