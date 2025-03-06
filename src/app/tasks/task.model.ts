import {InjectionToken, Provider} from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN-PROGRESS' | 'DONE';

export type TTaskStatusOptions = {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TaskStatus,
  text: string
}[];

export const TaskStatusOptionsToken = new InjectionToken<TTaskStatusOptions>('task-status-options');

const TaskStatusOption: TTaskStatusOptions = [
  {value: 'open', taskStatus: 'OPEN', text: 'Open'},
  {value: 'in-progress', taskStatus: 'IN-PROGRESS', text: 'In-Progress'},
  {value: 'done', taskStatus: 'DONE', text: 'Completed'},
]

export const TaskStatusOptionsProvider: Provider = {
  provide: TaskStatusOptionsToken,
  useValue: TaskStatusOption
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
