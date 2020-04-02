import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const schoolAPI = "https://5e7c6ee4a917d70016683411.mockapi.io/schools";
@Injectable()
export class SchollService {

  constructor( private http: HttpClient) { }
  getListSchools(): Observable<any>{
      return this.http.get<any>(schoolAPI);
  };
  addSchool(object): Observable<any>{
    return this.http.post<any>(schoolAPI,object);
  }
  updateSchool(object): Observable<any>{
    let url = `${schoolAPI}/${object.id}`;
    return this.http.put<any>(url,object);
  }
     getListSchoolbyId(id): Observable<any>{
    let url = `${schoolAPI}/${id}`;
    return this.http.get<any>(url);
  }
  deleteSchool(id): Observable<any>{
    let url = `${schoolAPI}/${id}`;
    return this.http.delete<any>(url);
  }
}