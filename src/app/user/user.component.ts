import {Component, Input, output} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users"

// type User = { id: string, name: string, avatar: string }

interface User {
  id: string,
  name: string,
  avatar: string
}

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected?: boolean;
  select = output<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
