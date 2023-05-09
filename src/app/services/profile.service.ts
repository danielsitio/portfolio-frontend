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

  patchProfile = (partialProfile: Partial<Profile>): Observable<void> => this.http.patch<void>(this.apiUrl, partialProfile)

  uloadProfilePicture = (profilePicture: File): Observable<void> => {
    const formData = new FormData()
    formData.append("profilePicture", profilePicture, profilePicture.name)
    return this.http.post<void>(`${this.apiUrl}/picture`, formData)
  }

  uploadBannerImage = (newBannerImage: File): Observable<void> => {
    const formData = new FormData()
    formData.append("bannerImage", newBannerImage, newBannerImage.name)
    return this.http.post<void>(`${this.apiUrl}/banner`, formData)
  }

  getProfilePicture = (): Observable<string | undefined> => this.http.get(`${this.apiUrl}/picture`, { responseType: "text" })

  test = (something: { image: File }) => this.http.post(`${this.apiUrl}/test`, something)
}
