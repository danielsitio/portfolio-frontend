import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { skillQuestions } from 'src/assets/project-forms';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  @Input() skill!: Skill
  @Output() deleted: EventEmitter<void> = new EventEmitter()
  @Output() updated: EventEmitter<Skill> = new EventEmitter()
  showForm: boolean = false
  isBeingDeleted = false

  questions = skillQuestions

  constructor(private skillService: SkillService) { }

  closeForm = () => this.showForm = false
  openForm = () => this.showForm = true

  emitDeletedEvent = () => this.deleted.emit()
  emitUpdateEvent = (updatedSkill: Skill) => this.updated.emit(updatedSkill)

  markAsBeingDeleted = () => this.isBeingDeleted = true
  markAsNotBeingDeleted = () => this.isBeingDeleted = false

  delete = () => {
    this.markAsBeingDeleted()
    this.skillService.delete(this.skill!.id).subscribe((this.emitDeletedEvent))
  }
  update = (partialSkill: Partial<Skill>) => this.skillService.update(this.skill.id, partialSkill).subscribe(this.emitUpdateEvent)

}
