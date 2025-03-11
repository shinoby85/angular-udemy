import {bootstrapApplication} from '@angular/platform-browser';

import {AppComponent} from './app/app.component';
import {counterReducer} from "./app/store/counter.reducer";
import {provideStore} from "@ngrx/store";

bootstrapApplication(AppComponent, {
  providers: [provideStore({counter: counterReducer})],
});
