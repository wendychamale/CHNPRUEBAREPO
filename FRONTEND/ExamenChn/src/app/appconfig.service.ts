import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppconfigService {

  constructor() { }
  
  restApiServiceBaseUri= 'http://localhost:8080/' // REST Api

  
  Sistema: 'CHN'

}
