import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {EditStudentComponent} from './edit-student/edit-student.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'edit/:id',
    component: EditStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
