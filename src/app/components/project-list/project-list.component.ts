import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {


  $projects: Observable<Project[]> | undefined

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects() {
    this.$projects = this.projectService.getAll()
  }

  addProject = () => this.projectService.add({ name: "nuevo", description: "desc enviada" }).subscribe(p => this.getProjects())

}
