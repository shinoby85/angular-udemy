import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {DUMMY_TASKS} from "../dummy-tasks";
import {User} from "../app.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {type NewTask} from "./task/task.model";

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
  tasks = DUMMY_TASKS;
  isAddingTask = false;

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTask) {
    this.tasks.push({
      id: new Date().toISOString(),
      userId: this.user.id,
      ...taskData
    });
    this.isAddingTask = false;
  }
}
