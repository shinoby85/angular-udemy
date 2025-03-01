import {Component} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus = 'online';
}
