import { Component } from '@angular/core';
import { ProjectInput } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent {
  projectInput: ProjectInput = { name: "", description: "" }

  @Output() projectAddedEvent: EventEmitter<void> = new EventEmitter<void>()

  constructor(private projectService: ProjectService) { }

  addProject = () => this.projectService.add(this.projectInput).subscribe(() => this.projectAddedEvent.emit())

}
