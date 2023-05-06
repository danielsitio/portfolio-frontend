import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  private apiUrl = environment.apiUrl + "/profile"
  constructor(private http: HttpClient) { }



  uloadProfilePicture = (profilePicture: File) => {
    const formData = new FormData()
    formData.append("profilePicture", profilePicture, profilePicture.name)
    return this.http.post(`${this.apiUrl}/picture`, formData)
  }

  getProfilePicture = (): Observable<string | undefined> => this.http.get(`${this.apiUrl}/picture`, { responseType: "text" })

}
