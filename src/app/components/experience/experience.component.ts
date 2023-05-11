import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experience, ExperienceForm } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { experienceQuestions } from 'src/assets/project-forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() isEditable: boolean = false

  isBeingDeleted: boolean = false

  questions = experienceQuestions

  @Input() experience!: Experience
  @Output() deleted: EventEmitter<void> = new EventEmitter<void>()
  @Output() updated: EventEmitter<Experience> = new EventEmitter<Experience>()

  showForm: boolean = false

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.populateQuestions()
  }
  populateQuestions = () => {
    let { workplace, position, description, startDate, finishDate } = this.experience
    let arrayCurrentValues: string[] = [workplace.name, position, description, startDate, finishDate]
    this.questions = this.questions.map((question, index) => {
      return { ...question, value: arrayCurrentValues[index] ? arrayCurrentValues[index] : undefined }
    })
  }

  closeForm = () => this.showForm = false
  openForm = () => this.showForm = true

  emitDeletedEvent = () => this.deleted.emit()
  emitUpdateEvent = (updatedExperience: Experience) => this.updated.emit(updatedExperience)

  closeFormAndEmitUpdated = (updatedExperience: Experience) => {
    this.emitUpdateEvent(updatedExperience)
    this.closeForm()
  }
  markAsBeingDeleted = () => this.isBeingDeleted = true
  markAsNotBeingDeleted = () => this.isBeingDeleted = false

  delete = () => {
    this.markAsBeingDeleted()
    this.experienceService.delete(this.experience.id).subscribe((this.emitDeletedEvent))
  }
  edit = (experienceForm: ExperienceForm) => {
    this.experienceService.update(this.experience.id, experienceForm).subscribe(this.closeFormAndEmitUpdated)
  }
}
