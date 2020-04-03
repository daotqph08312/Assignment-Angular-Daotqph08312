import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Class} from "./class"
const classAPI = "https://5e7c6ee4a917d70016683411.mockapi.io/Classes";
@Injectable()
export class ClassService {

  constructor( private http: HttpClient) { }
   getlistClass(id): Observable<Class>{
     return this.http.get<Class>(classAPI);
   }
}