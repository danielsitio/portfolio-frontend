import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  $profilePicture: Observable<string | undefined> | undefined

  constructor(private profileService: ProfileService) { }


  ngOnInit(): void {
    this.updateProfilePicture()
  }

  updateProfilePicture = () => this.$profilePicture = this.profileService.getProfilePicture()

  uploadProfilePicture({ target }: Event) {
    const profilePicture: File = (<HTMLInputElement>target).files![0]
    this.profileService.uloadProfilePicture(profilePicture).subscribe(this.updateProfilePicture)
  }

}
