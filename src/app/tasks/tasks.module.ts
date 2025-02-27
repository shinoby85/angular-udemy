import {NgModule} from "@angular/core";
import {TasksComponent} from "./tasks.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TaskComponent} from "./task/task.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [TasksComponent, NewTaskComponent, TaskComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [TasksComponent]
})
export class TasksModule {

}
