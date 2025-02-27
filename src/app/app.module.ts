import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {TasksComponent} from "./tasks/tasks.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HeaderComponent,
    UserComponent,
    TasksComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
