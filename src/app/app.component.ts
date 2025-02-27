import {Component} from '@angular/core';
import {DUMMY_USERS} from "./dummy-users";

export interface User {
  id: string,
  name: string,
  avatar: string,
}

@Component({
  selector: 'app-root',
  standalone: false,
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


