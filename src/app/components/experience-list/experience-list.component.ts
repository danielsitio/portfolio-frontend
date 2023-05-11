import { Component } from '@angular/core';
import { Experience, ExperienceForm } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { experienceQuestions } from 'src/assets/project-forms';
import { isEqual } from "lodash";

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent {

  experiencesAreLoading: boolean = false
  experiences?: Experience[]
  questions = experienceQuestions
  showForm: boolean = false
  constructor(private experienceService: ExperienceService) {

  }
  ngOnInit(): void {
    this.markExperiencesAsLoading()
    this.experienceService.getAll().subscribe(experiences => {
      this.experiences = experiences
      this.markExperiencesAsNotLoading()
    })
  }
  markExperiencesAsLoading = () => this.experiencesAreLoading = true
  markExperiencesAsNotLoading = () => this.experiencesAreLoading = false

  openForm = () => this.showForm = true
  closeForm = () => this.showForm = false

  addExperience = (newExperience: ExperienceForm) => {
    this.experienceService.post(newExperience).subscribe(experience => {
      this.experiences = [...this.experiences!, experience]
      this.closeForm()
    })
  }
  deleteExperience = (experienceToRemove: Experience) => this.experiences = this.experiences?.filter(experience => experience.id != experienceToRemove.id)
  updateExperience = (updatedExperience: Experience) => {
    let experienceToReplace: Experience | undefined = this.experiences?.find(experience => experience.id == updatedExperience.id)
    /* if (!isEqual(experienceToReplace, updatedExperience)) */
    console.log("el cambiado es " + JSON.stringify(updatedExperience) + " Y EL encontrado es " + JSON.stringify(experienceToReplace))
    console.log("son iguales :" + isEqual(experienceToReplace, updatedExperience))

    this.experiences = this.experiences?.map(experience => experience.id === updatedExperience.id ? updatedExperience : experience)
  }

}
