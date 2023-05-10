import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HalProject, Project, ProjectForm } from '../model/project';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectApi = `${environment.apiUrl}/projects`


  constructor(private http: HttpClient) {
  }

  getAll = (): Observable<Project[]> => this.http.get<Project[]>(this.projectApi)

  post = (newProject: ProjectForm): Observable<Project> => {
    const formData = new FormData()
    if (newProject.image) formData.append("image", newProject.image)
    formData.append("project", new Blob([JSON.stringify(newProject as Project)], { type: "application/json" }))
    return this.http.post<Project>(this.projectApi, formData)
  }

  patch = (id: number, partialProject: Partial<ProjectForm>): Observable<Project> => this.http.patch<Project>(`${this.projectApi}/${id}`, partialProject)

  delete = (id: number) => this.http.delete(`${this.projectApi}/${id}`)

}
