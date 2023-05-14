import { Component, Input, OnInit } from '@angular/core';
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

  @Input() isEditable: boolean = false

  profile?: Profile

  profileDescriptionQuestions = profileDescriptionQuestions;
  basicProfileQuestions = basicProfileQuestions;

  profileDescriptionForm?: Partial<Profile>
  profileBasicForm?: Partial<Profile>

  profilePictureIsLoading: boolean = false
  bannerImageIsLoading: boolean = false

  showDescriptionForm: boolean = false
  showBasicProfileForm: boolean = false




  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {

    this.profileService.getProfile().subscribe(profile => {
      this.profile = profile
      const { name, lastName, title, description } = profile!
      this.profileBasicForm = {
        name,
        lastName,
        title
      }
      this.profileDescriptionForm = {
        description
      }
    })
  }

  openDescriptionForm = () => this.showDescriptionForm = true
  closeDescriptionForm = () => this.showDescriptionForm = false

  openBasicProfileForm = () => this.showBasicProfileForm = true
  closeBasicProfileForm = () => this.showBasicProfileForm = false

  closeAllFormsAndRefresh = () => {
    this.closeAllForms()
  }

  closeAllForms = () => {
    this.closeBasicProfileForm()
    this.closeDescriptionForm()
  }

  editProfile = (partialProfile: Partial<Profile>) => this.profileService.patchProfile(partialProfile).subscribe(updatedProfile => {
    this.profile = { ...updatedProfile, picture: this.profile?.picture, banner: this.profile?.banner }
    this.closeAllForms()
  })

  uploadBannerImage({ target }: Event) {
    const file: File = (<HTMLInputElement>target).files![0]
    if (file) {
      this.bannerImageIsLoading = true
      this.profileService.uploadBannerImage(file).subscribe(url => {
        this.profile!.banner!.url = this.profile!.banner?.url + "?" + new Date().getTime()
        this.bannerImageIsLoading = false
      })
    }
  }
  uploadProfilePicture({ target }: Event) {
    const file: File = (<HTMLInputElement>target).files![0]
    if (file) {
      this.profilePictureIsLoading = true
      this.profileService.uloadProfilePicture(file).subscribe(url => {
        this.profile!.picture!.url = url + "?" + new Date().getTime()
        this.profilePictureIsLoading = false
      })
    }
  }

}
