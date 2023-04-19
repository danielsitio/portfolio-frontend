import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  @Input() project!: Project

  @Output() projectDeletedEvent: EventEmitter<void> = new EventEmitter<void>()

  constructor(private projectService: ProjectService) { }



  delete = () => this.projectService.delete(1).subscribe(() => this.projectDeletedEvent.emit())
  edit = () => this.projectService

}
