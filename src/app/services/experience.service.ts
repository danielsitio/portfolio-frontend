import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Experience, ExperienceForm } from '../model/experience';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private experienceApi = `${environment.backendUrl}/api/experiences`
  constructor(private http: HttpClient) { }

  post = (experienceForm: ExperienceForm): Observable<Experience> => {
    const formData = new FormData()
    if (experienceForm.logo) formData.append("workplaceLogo", experienceForm.logo)
    let experience: Partial<Experience> = { ...experienceForm, workplace: { name: experienceForm.institute, logo: undefined } }
    formData.append("experience", new Blob([JSON.stringify(experience)], { type: "application/json" }))
    return this.http.post<Experience>(this.experienceApi, formData)
  }
  getAll = (): Observable<Experience[]> => this.http.get<Experience[]>(this.experienceApi)

  delete = (id: number) => this.http.delete(`${this.experienceApi}/${id}`)

  update = (id: number, experienceForm: ExperienceForm): Observable<Experience> => {
    const formData = new FormData()
    if (experienceForm.logo) formData.append("updatedWorkplaceLogo", experienceForm.logo)
    let experience: Partial<Experience> = { ...experienceForm, workplace: { name: experienceForm.institute, logo: undefined } }
    formData.append("updatedExperience", new Blob([JSON.stringify(experience)], { type: "application/json" }))
    return this.http.patch<Experience>(`${this.experienceApi}/${id}`, formData)
  }

}
