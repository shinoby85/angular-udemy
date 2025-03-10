import {Routes} from "@angular/router";
import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {resolveTitle, userNameResolver, UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {routes as usersRoutes} from "./users/users.routes";
import {NotFoundComponent} from "./not-found/not-found.component";

export const routes: Routes = [
  {path: "", component: NoTaskComponent, title: 'No Tasks'},
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: usersRoutes,
    resolve: {
      userName: userNameResolver
    },
    title: resolveTitle
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]
