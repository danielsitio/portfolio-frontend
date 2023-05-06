import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HalProject, Project } from '../model/project';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectApi = `${environment.apiUrl}/projects`


  constructor(private http: HttpClient) {
  }

  getAll = (): Observable<HalProject[]> => this.http.get<any>(`${this.projectApi}`).pipe(map(res => res._embedded.projects as HalProject[]))

  add = (newProject: Project): Observable<HalProject> => this.http.post<HalProject>(`${this.projectApi}`, newProject)

  edit = (editedProject: HalProject): Observable<void> => this.http.put<void>(editedProject._links.self.href, editedProject as Project)

  delete = (projectToDelete: HalProject) => this.http.delete<void>(projectToDelete._links.self.href)

}
