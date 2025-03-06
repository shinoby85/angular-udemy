import {Component, computed, Inject, input} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Task, TaskStatus, TaskStatusOptionsToken, TTaskStatusOptions} from '../../task.model';
import {TasksService} from "../../tasks.service";
import {TaskServiceToken} from "../../../../main";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  // tasksService = inject<TasksService>(TaskServiceToken);
  task = input.required<Task>();
  taskStatus = computed(() => {
    switch (this.task().status) {
      case 'OPEN':
        return 'Open';
      case 'IN-PROGRESS':
        return 'Working on it';
      case 'DONE':
        return 'Completed';
      default:
        return 'Open';
    }
  });

  constructor(@Inject(TaskServiceToken) private tasksService: TasksService, @Inject(TaskStatusOptionsToken) public taskStatusOption: TTaskStatusOptions) {
  }

  onChangeTaskStatus(taskId: string, status: string) {
    let newStatus: TaskStatus = 'OPEN';

    switch (status) {
      case 'open':
        newStatus = 'OPEN';
        break;
      case 'in-progress':
        newStatus = 'IN-PROGRESS';
        break;
      case 'done':
        newStatus = 'DONE';
        break;
      default:
        break;
    }
    this.tasksService.updateTaskStatus(taskId, newStatus);
  }
}
