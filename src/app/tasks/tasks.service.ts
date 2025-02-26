import {Injectable} from '@angular/core';
import {DUMMY_TASKS} from "../dummy-tasks";
import {NewTask, Task} from "./task/task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks = DUMMY_TASKS;

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((task) => task.id === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    this.tasks.push({
      id: new Date().toISOString(),
      userId,
      ...taskData
    });
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
