import {Component, DestroyRef, inject, OnInit, output} from '@angular/core';

import {DataStorageService} from '../shared/data-storage.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: false
})
export class HeaderComponent implements OnInit {
  featureSelected = output<string>();
  public isAuthenticated: boolean = false;
  private _userSub?: Subscription;
  private _authService = inject(AuthService);
  private _destroyedRef = inject(DestroyRef);

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this._userSub = this._authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
    this._destroyedRef.onDestroy(() => {
      this._userSub?.unsubscribe();
    });
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this._authService.logout();
  }
}
