import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Education, EducationForm } from '../model/education';
import { Observable } from 'rxjs';
import { httpRequestStates, HttpRequestState } from 'ngx-http-request-state';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educationApi = `${environment.apiUrl}/educations`
  constructor(private http: HttpClient) { }

  addEducation = (newEducation: EducationForm): Observable<Education> => {
    const a = new FormData()
    a.append("logo", newEducation.logo!)
    a.append("education", new Blob([JSON.stringify(newEducation as Education)], { type: "application/json" }))
    return this.http.post<Education>(this.educationApi, a)
  }
  getEducations = (): Observable<Education[]> => this.http.get<Education[]>(this.educationApi)

  deleteEducation = (id: number) => this.http.delete(`${this.educationApi}/${id}`)

  modifyEducation = (id: number, partialEducation: Partial<Education>): Observable<Education> => this.http.patch<Education>(`${this.educationApi}/${id}`, partialEducation)

}
