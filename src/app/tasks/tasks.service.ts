import {inject, signal} from '@angular/core';
import {Task, TaskStatus} from "./task.model";
import {LoggingService} from "../logging.service";

export class TasksService {

  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();
  private loggingService = inject(LoggingService);

  addTask(taskData: { title: string, description: string }) {
    const newTask: Task = {
      ...taskData,
      id: new Date().toISOString(),
      status: "OPEN"
    }
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.loggingService.log('Adding task with title ' + taskData.title);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) => oldTasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          status: newStatus
        }
      }
      return task;
    }));
    this.loggingService.log('Change task status to ' + newStatus);
  }

}
