import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { skillQuestions } from 'src/assets/project-forms';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  @Input() isEditable: boolean = false

  skills?: Skill[]
  skillsAreLoading: boolean = false
  skillQuestions: Question[] = skillQuestions
  showSkillForm: boolean = false
  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.markSkillsAsLoading()
    this.skillService.getAll().subscribe(skills => {
      this.skills = skills
      this.markSkillsAsNotLoading()
    })
  }

  openForm = () => this.showSkillForm = true
  closeForm = () => this.showSkillForm = false

  markSkillsAsLoading = () => this.skillsAreLoading = true
  markSkillsAsNotLoading = () => this.skillsAreLoading = false

  addSkill = (newSkill: Skill) => {
    this.skillService.post(newSkill).subscribe(skill => {
      this.skills = [...this.skills!, skill]
      this.closeForm()
    })
  }
  deleteSkill = (skillToRemove: Skill) => this.skills = this.skills?.filter(skill => skill.id != skillToRemove.id)
  updateSkill = (updatedSkill: Skill) => this.skills = this.skills?.map(skill => skill.id === updatedSkill.id ? updatedSkill : skill)
}
