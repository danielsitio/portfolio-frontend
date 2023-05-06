import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Education, EducationInput } from '../model/education';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private educationApi = `${environment.apiUrl}/education`
  constructor(private http: HttpClient) { }

  getAll = (): Observable<Education[]> => this.http.get<Education[]>(`${this.educationApi}/getAll`)
  add = (educationInput: EducationInput) => this.http.post(`${this.educationApi}/add`, { educationInput })
  delete = (educationId: number) => this.http.delete(`${this.educationApi}/delete?educationId=${educationId}`)
  update = (editedEducation: Education) => this.http.patch(`${this.educationApi}/update?educationId=${editedEducation.id}`, editedEducation as EducationInput)

}
