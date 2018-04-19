import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AppService } from '../../../app.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ProjectsService {
  projects: any;
  project: any;
  onProjectsChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  constructor(private http: HttpClient, private appService: AppService) {

   }
   getProjects(): Observable<any[]>
   {
     return new Observable((resolve, reject) => {
       this.http.get(this.appService.baseUrl() + '/apis/getProjects')
        .subscribe(response => {
          this.projects = response;
          resolve(this.projects);
        }, reject);
     })
   }

}
