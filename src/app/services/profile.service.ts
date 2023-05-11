import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  private apiUrl = environment.apiUrl + "/profile"
  constructor(private http: HttpClient) { }

  getProfile = (): Observable<Profile> => this.http.get<Profile>(this.apiUrl)

  patchProfile = (partialProfile: Partial<Profile>): Observable<Profile> => this.http.patch<Profile>(this.apiUrl, partialProfile)

  uloadProfilePicture = (profilePicture: File): Observable<string> => {
    const formData = new FormData()
    formData.append("profilePicture", profilePicture, profilePicture.name)
    return this.http.post(`${this.apiUrl}/picture`, formData, { responseType: "text" })
  }

  uploadBannerImage = (newBannerImage: File): Observable<string> => {
    const formData = new FormData()
    formData.append("banner", newBannerImage, newBannerImage.name)
    return this.http.post(`${this.apiUrl}/banner`, formData, { responseType: "text" })
  }

  getProfilePicture = (): Observable<string> => this.http.get(`${this.apiUrl}/picture`, { responseType: "text" })

}
