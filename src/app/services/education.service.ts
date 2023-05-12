import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Education, EducationForm } from '../model/education';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educationApi = `${environment.backendUrl}/api/educations`
  constructor(private http: HttpClient) { }

  addEducation = (educationForm: EducationForm): Observable<Education> => {
    const formData = new FormData()
    if (educationForm.logo) formData.append("schoolLogo", educationForm.logo)
    let education: Partial<Education> = { ...educationForm, school: { name: educationForm.school, logo: undefined } }
    formData.append("education", new Blob([JSON.stringify(education)], { type: "application/json" }))
    return this.http.post<Education>(this.educationApi, formData)
  }
  getEducations = (): Observable<Education[]> => this.http.get<Education[]>(this.educationApi)

  deleteEducation = (id: number) => this.http.delete(`${this.educationApi}/${id}`)

  modifyEducation = (id: number, educationForm: EducationForm): Observable<Education> => {
    const formData = new FormData()
    if (educationForm.logo) formData.append("updatedSchoolLogo", educationForm.logo)
    let education: Partial<Education> = { ...educationForm, school: { name: educationForm.school, logo: undefined } }
    formData.append("updatedEducation", new Blob([JSON.stringify(education)], { type: "application/json" }))
    return this.http.patch<Education>(`${this.educationApi}/${id}`, formData)
  }

}
