import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { fuseAnimations } from '../../../core/animations';
import { ProjectsService } from './projects.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations : fuseAnimations
})
export class ProjectsComponent implements OnInit {
projects: any[];
onProjectsChanged: Subscription;
  constructor(private projectsService: ProjectsService) {
  this.get_projects();
   }
  ngOnInit() {

    this.onProjectsChanged = this.projectsService.onProjectsChanged
        .subscribe(projects => {
          this.projects = projects;
        });
  }
  get_projects(){
    // this.projectsService.getProjects().subscribe(projects => {
    //   console.log(projects);
    //   this.projects = projects;
    // })
  }
}
