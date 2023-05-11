import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/model/question';
import { HalProject, Project, ProjectForm } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { newProjectQuestions } from 'src/assets/project-forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() isEditable: boolean = false

  isBeingDeleted: boolean = false

  questions = newProjectQuestions

  @Input() project!: Project
  @Output() deleted: EventEmitter<void> = new EventEmitter()
  @Output() updated: EventEmitter<Project> = new EventEmitter()

  showForm: boolean = false


  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    /* this.questions = this.questions.map(question => {
      return ({ ...question, value: question.key in this.project ? (this.project as any)[question.key] : null })
    } */
    /* this.questions = this.questions.map(question => {
      return { ...question, value: question.key in this.project ? (this.project as any)[question.key] : null }
    }) */
  }

  closeForm = () => this.showForm = false
  openForm = () => this.showForm = true

  emitDeletedEvent = () => this.deleted.emit()
  emitUpdateEvent = (updatedProject: Project) => this.updated.emit(updatedProject)

  closeFormAndEmitUpdated = (updatedProject: Project) => {
    this.emitUpdateEvent(updatedProject)
    this.closeForm()
  }
  markAsBeingDeleted = () => this.isBeingDeleted = true
  markAsNotBeingDeleted = () => this.isBeingDeleted = false

  delete = () => {
    this.markAsBeingDeleted()
    this.projectService.delete(this.project.id).subscribe((this.emitDeletedEvent))
  }
  edit = (projectForm: ProjectForm) => {
    this.projectService.patch(this.project.id, projectForm).subscribe(this.closeFormAndEmitUpdated)
  }
}
