import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../core/modules/shared.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './projects.service';
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
  declarations: [ProjectsComponent],
  providers : [
    ProjectsService
  ]
})
export class ProjectsModule { }
