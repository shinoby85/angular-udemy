import {Component, computed, inject, input} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';

import {TaskComponent} from './task/task.component';
import {TasksService} from './tasks.service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  order = input<'asc' | 'desc' | undefined>();
  userId = input.required<string>();
  private tasksService = inject(TasksService);
  private activatedRoute = inject(ActivatedRoute);
  private paramMap = toSignal(this.activatedRoute.paramMap);
  userTasks = computed(() => {
    const tasks = this.tasksService
      .allTasks()
      .filter((task) => task.userId === this.paramMap()?.get('userId'));

    if (this.order() && this.order() === 'asc') {
      tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else {
      tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
    }

    return tasks.length ? tasks : [];
  });
}