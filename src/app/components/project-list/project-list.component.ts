import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/model/question';
import { HalProject, Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { newProjectQuestions } from 'src/assets/project-forms';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {


  $projects: Observable<HalProject[]> | undefined

  newProjectQuestions: Question[] = newProjectQuestions

  showProjectForm: boolean = false

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.updateProjects()
  }

  updateProjects = () => this.$projects = this.projectService.getAll()

  openProjectForm = () => this.showProjectForm = true

  closeProjectForm = () => this.showProjectForm = false

  closeFormAndUpdate = () => {
    this.closeProjectForm()
    this.updateProjects()
  }

  addProject = (newProject: Project) => this.projectService.add(newProject).subscribe(this.closeFormAndUpdate)

}
