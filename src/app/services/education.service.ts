import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Education, EducationForm } from '../model/education';
import { Observable } from 'rxjs';
import { httpRequestStates } from 'ngx-http-request-state';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educationApi = `${environment.apiUrl}/educations`
  constructor(private http: HttpClient) { }

  addEducation = (newEducation: EducationForm) => {
    const a = new FormData()
    a.append("logo", newEducation.logo!)
    a.append("education", new Blob([JSON.stringify(newEducation as Education)], { type: "application/json" }))
    return this.http.post<void>(this.educationApi, a)
  }
  getEducations = () => this.http.get<Education[]>(this.educationApi).pipe(httpRequestStates())
}
