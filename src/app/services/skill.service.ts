import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {


  skillApi = environment.backendUrl + "/api/skills"

  constructor(private http: HttpClient) { }

  getAll = (): Observable<Skill[]> => this.http.get<Skill[]>(this.skillApi)

  post = (newSkill: Skill): Observable<Skill> => this.http.post<Skill>(this.skillApi, newSkill)

  delete = (id: number): Observable<void> => this.http.delete<void>(`${this.skillApi}/${id}`)
  update = (id: number, partialSkill: Partial<Skill>): Observable<Skill> => this.http.patch<Skill>(`${this.skillApi}/${id}`, partialSkill)

}
