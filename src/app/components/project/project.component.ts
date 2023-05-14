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
  projectForm?: ProjectForm
  @Output() deleted: EventEmitter<void> = new EventEmitter()
  @Output() updated: EventEmitter<Project> = new EventEmitter()

  showForm: boolean = false


  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectForm = {
      name: this.project.name,
      description: this.project.description,
      realizationDate: this.project.realizationDate,
      link: this.project.link
    }
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
