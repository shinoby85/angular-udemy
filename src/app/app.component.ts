import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {NgIf} from "@angular/common";
import {TasksComponent} from "./tasks/tasks.component";

export interface User {
  id: string,
  name: string,
  avatar: string,
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    NgIf,
    TasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: User

  onSelectUser(id: string) {
    this.selectedUser = this.users.find(user => user.id === id)!;
  }
}


