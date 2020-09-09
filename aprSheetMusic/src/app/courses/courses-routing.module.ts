import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { ManageComponent } from './manage/manage.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [{
  path: 'courses',
  component: CoursesComponent,
  //canActivate:[AuthGuard],
  children: [{
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      { path: 'manage', component: ManageComponent },
    ]
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
