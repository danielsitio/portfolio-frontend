import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../model/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getAll = (): Observable<Project[]> => this.http.get<Project[]>(`${environment.apiUrl}/project/getAll`)

  add = (newProject: Project): Observable<Project> => this.http.post<Project>(`${environment.apiUrl}/project/add`, newProject)

  delete = (projectId: number) => this.http.delete(`${environment.apiUrl}/project/delete?projectId=${projectId}`)
}
