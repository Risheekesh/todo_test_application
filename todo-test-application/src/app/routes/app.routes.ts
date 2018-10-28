import { RouterModule, Routes } from '@angular/router';
import {TodoComponent} from '../todo/todo.component';
const routes: Routes = [
  { path: 'red', component: TodoComponent },
  { path: 'green', component: TodoComponent },
  { path: 'blue', component: TodoComponent },
  { path: '', component: TodoComponent }
  
];

export const routing = RouterModule.forRoot(routes);