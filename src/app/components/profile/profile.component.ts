import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/model/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { profileDescriptionQuestions } from 'src/assets/project-forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  $profile?: Observable<Profile>

  profileDescriptionQuestions = profileDescriptionQuestions;

  showForm: boolean = false

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.refreshProfile()
  }

  refreshProfile = () => this.$profile = this.profileService.getProfile()

  openForm = () => this.showForm = true
  closeForm = () => this.showForm = false

  closeFormAndRefresh = () => {
    this.closeForm()
    this.refreshProfile()
  }

  editProfile = (partialProfile: Partial<Profile>) => this.profileService.patchProfile(partialProfile).subscribe(this.closeFormAndRefresh)

  uploadBannerImage({ target }: Event) {
    const file: File = (<HTMLInputElement>target).files![0]
    this.profileService.uploadBannerImage(file).subscribe(this.refreshProfile)
  }

}
