import { Component, Input } from '@angular/core';
import { Experience, ExperienceForm } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { experienceQuestions } from 'src/assets/project-forms';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent {

  @Input() isEditable: boolean = false

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
  updateExperience = (updatedExperience: Experience) => this.experiences = this.experiences?.map(experience => experience.id === updatedExperience.id ? updatedExperience : experience)

}
