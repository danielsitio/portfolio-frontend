import { Component, Input, OnInit } from '@angular/core';
import { Project, ProjectForm } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { newProjectQuestions } from 'src/assets/project-forms';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() isEditable: boolean = false
  projectAreLoading: boolean = false
  projects?: Project[]
  questions = newProjectQuestions
  showForm: boolean = false
  constructor(private projectService: ProjectService) {

  }
  ngOnInit(): void {
    this.markAsLoading()
    this.projectService.getAll().subscribe(projects => {
      this.projects = projects
      this.markAsNotLoading()
    })
  }
  markAsLoading = () => this.projectAreLoading = true
  markAsNotLoading = () => this.projectAreLoading = false

  openForm = () => this.showForm = true
  closeForm = () => this.showForm = false

  add = (newProject: ProjectForm) => {
    this.projectService.post(newProject).subscribe(project => {
      this.projects = [...this.projects!, project]
      this.closeForm()
    })
  }
  delete = (projectToRemove: Project) => this.projects = this.projects?.filter(project => project.id != projectToRemove.id)
  update = (updatedProject: Project) => this.projects = this.projects?.map(project => project.id === updatedProject.id ? updatedProject : project)

}
