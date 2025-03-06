import {Component, computed, inject, signal} from '@angular/core';

import {TaskItemComponent} from './task-item/task-item.component';
import {TasksService} from "../tasks.service";
import {TaskServiceToken} from "../../../main";

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  private tasksService = inject<TasksService>(TaskServiceToken);
  tasks = computed(() => {
    if (this.selectedFilter() === 'all') {
      return this.tasksService.allTasks();
    }
    return this.tasksService.allTasks().filter(task => this.selectedFilter() === task.status.toLowerCase())
  })

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
