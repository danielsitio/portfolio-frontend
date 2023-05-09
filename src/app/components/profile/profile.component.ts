import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/model/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { basicProfileQuestions, profileDescriptionQuestions } from 'src/assets/project-forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  $profile?: Observable<Profile>

  profileDescriptionQuestions = profileDescriptionQuestions;
  basicProfileQuestions = basicProfileQuestions;

  showDescriptionForm: boolean = false
  showBasicProfileForm: boolean = false

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.refreshProfile()
  }

  refreshProfile = () => this.$profile = this.profileService.getProfile()

  openDescriptionForm = () => this.showDescriptionForm = true
  closeDescriptionForm = () => this.showDescriptionForm = false

  openBasicProfileForm = () => this.showBasicProfileForm = true
  closeBasicProfileForm = () => this.showBasicProfileForm = false

  closeAllFormsAndRefresh = () => {
    this.closeAllForms()
    this.refreshProfile()
  }

  closeAllForms = () => {
    this.closeBasicProfileForm()
    this.closeDescriptionForm()
  }

  editProfile = (partialProfile: Partial<Profile>) => this.profileService.patchProfile(partialProfile).subscribe(this.closeAllFormsAndRefresh)

  uploadBannerImage({ target }: Event) {
    const file: File = (<HTMLInputElement>target).files![0]
    this.profileService.uploadBannerImage(file).subscribe(this.refreshProfile)
    /* this.profileService.test({ image: file }).subscribe(() => console.log("se envio correctamente")) */
  }
  uploadProfilePicture({ target }: Event) {
    const file: File = (<HTMLInputElement>target).files![0]
    this.profileService.uloadProfilePicture(file).subscribe(this.refreshProfile)
  }

}
