import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HalProject, Project, ProjectForm } from '../model/project';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectApi = `${environment.backendUrl}/api/projects`


  constructor(private http: HttpClient) {
  }

  getAll = (): Observable<Project[]> => this.http.get<Project[]>(this.projectApi)

  post = (projectForm: ProjectForm): Observable<Project> => {
    const formData = new FormData()
    if (projectForm.portrait) formData.append("projectPortrait", projectForm.portrait)
    let project: Partial<Project> = { ...projectForm, portrait: undefined }
    formData.append("project", new Blob([JSON.stringify(project)], { type: "application/json" }))
    return this.http.post<Project>(this.projectApi, formData)
  }

  patch = (id: number, projectForm: ProjectForm): Observable<Project> => {
    const formData = new FormData()
    if (projectForm.portrait) formData.append("updatedProjectPortrait", projectForm.portrait)
    let project: Partial<Project> = { ...projectForm, portrait: undefined }
    formData.append("updatedProject", new Blob([JSON.stringify(project)], { type: "application/json" }))
    return this.http.patch<Project>(`${this.projectApi}/${id}`, formData)
  }

  delete = (id: number) => this.http.delete(`${this.projectApi}/${id}`)

}
