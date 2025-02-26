import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {User} from "../app.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {type NewTask, Task} from "./task/task.model";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) user!: User;
  isAddingTask = false;
  tasks?: Task[] = this.taskService.getUserTasks(this.user.id);

  constructor(private taskService: TasksService) {
  }

  onCompleteTask(taskId: string) {
    this.taskService.removeTask(taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTask) {
    this.taskService.addTask(taskData, this.user.id);
    this.isAddingTask = false;
  }
}
