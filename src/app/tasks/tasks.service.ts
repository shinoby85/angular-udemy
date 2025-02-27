import {Injectable} from '@angular/core';
import {DUMMY_TASKS} from "../dummy-tasks";
import {NewTask, Task} from "./task/task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    this.tasks.push({
      id: new Date().toISOString(),
      userId,
      ...taskData
    });
    this.setTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.setTasks();
  }

  private setTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
