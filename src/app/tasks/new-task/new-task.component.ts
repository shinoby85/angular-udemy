import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() closeModal = new EventEmitter();

  tasksService = inject(TasksService);

  enteredTitle = "";
  enteredSummary = "";
  enteredDate = "";


  onCloseAddTask() {
    this.closeModal.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    }, this.userId);
    this.closeModal.emit();
  }
}
