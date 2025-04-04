import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {DataService} from '../shared/data.service';

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
  data!: string;

  constructor(private userService: UserService, private dataService: DataService) {
    this.user = this.userService.user;

    // @ts-ignore
    this.dataService.getDetails().then((data: string) => this.data = data);
  }

  ngOnInit(): void {
  }
}
