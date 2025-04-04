import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  user: { name: string; };
  isLoggedIn = false;

  constructor(private userService: UserService) {
    this.user = this.userService.user;
  }

  ngOnInit(): void {
  }
}
