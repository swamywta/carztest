import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }
  baseUrl(){
    return 'http://localhost:8080';
  }

}
