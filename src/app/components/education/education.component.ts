import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { newEducationQuestions } from 'src/assets/project-forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  isBeingDeleted: boolean = false

  questions = newEducationQuestions

  @Input() education!: Education
  @Output() deleted: EventEmitter<void> = new EventEmitter<void>()
  @Output() updated: EventEmitter<Education> = new EventEmitter<Education>()

  showForm: boolean = false

  constructor(private educationService: EducationService) { }
  ngOnInit(): void {
    this.populateQuestions()
  }
  populateQuestions = () => {
    /*  let { workplace, position, description, startDate, finishDate } = this.education
     let arrayCurrentValues: string[] = [workplace.name, position, description, startDate, finishDate]
     this.questions = this.questions.map((question, index) => {
       return { ...question, value: arrayCurrentValues[index] ? arrayCurrentValues[index] : undefined }
     }) */
  }

  closeForm = () => this.showForm = false
  openForm = () => this.showForm = true

  emitDeletedEvent = () => this.deleted.emit()
  emitUpdateEvent = (updatedEducation: Education) => this.updated.emit(updatedEducation)

  closeFormAndEmitUpdated = (updatedEducation: Education) => {
    this.emitUpdateEvent(updatedEducation)
    this.closeForm()
  }
  markAsBeingDeleted = () => this.isBeingDeleted = true
  markAsNotBeingDeleted = () => this.isBeingDeleted = false

  delete = () => {
    this.markAsBeingDeleted()
    this.educationService.deleteEducation(this.education!.id).subscribe((this.emitDeletedEvent))
  }
  edit = (partialEducation: Partial<Education>) => {
    this.educationService.modifyEducation(this.education!.id, partialEducation).subscribe(this.closeFormAndEmitUpdated)
  }

}
