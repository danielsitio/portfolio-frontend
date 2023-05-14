import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Education, EducationForm } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { newEducationQuestions } from 'src/assets/project-forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() isEditable: boolean = false

  isBeingDeleted: boolean = false

  questions = newEducationQuestions

  @Input() education!: Education
  educationForm?: EducationForm
  @Output() deleted: EventEmitter<void> = new EventEmitter<void>()
  @Output() updated: EventEmitter<Education> = new EventEmitter<Education>()

  showForm: boolean = false

  constructor(private educationService: EducationService) { }
  ngOnInit(): void {
    this.educationForm = {
      title: this.education.title,
      school: this.education.school.name,
      finishDate: this.education.finishDate,
      startDate: this.education.startDate
    }
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
  edit = (educationForm: EducationForm) => {
    this.educationService.modifyEducation(this.education!.id, educationForm).subscribe(this.closeFormAndEmitUpdated)
  }

}
