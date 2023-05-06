import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/model/question';
import { HalProject, Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { newProjectQuestions } from 'src/assets/project-forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() project!: HalProject

  @Output() changeInProjects: EventEmitter<void> = new EventEmitter<void>()

  editProjectQuestions: Question[] = newProjectQuestions

  showProjectForm: boolean = false

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.editProjectQuestions = this.editProjectQuestions.map(question => {
      return { ...question, value: question.key in this.project ? (this.project as any)[question.key] : "" }
    })
  }


  emitChangeInProjects = () => this.changeInProjects.emit()

  openProjectForm = () => this.showProjectForm = true

  closeProjectForm = () => this.showProjectForm = false

  closeProjectFormAndEmit = () => {
    this.closeProjectForm()
    this.emitChangeInProjects()
  }
  editProject = (editedProject: Project) => this.projectService.edit({ ...this.project, ...editedProject }).subscribe(this.closeProjectFormAndEmit)
  deleteProject = () => this.projectService.delete(this.project).subscribe(this.emitChangeInProjects)
}
