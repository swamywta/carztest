import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../core/modules/shared.module';
import { ProjectsComponent } from './projects.component';
const routes = [
    {
        path     : 'projects',
        component: ProjectsComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
