import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { ManageComponent } from './manage/manage.component';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [CoursesComponent, ManageComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AuthModule
  ]
})
export class CoursesModule { }
