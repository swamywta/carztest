import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fuseAnimations } from '../../../core/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations : fuseAnimations
})
export class ProjectsComponent implements OnInit {
projects: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {

  this.http.get('http://localhost:8080/apis/getProjects').subscribe(data => {
    console.log(data);
    this.projects = data.data;
  });

  }

}
