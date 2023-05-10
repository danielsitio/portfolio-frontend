import { Component, OnInit } from '@angular/core';
import { Education, EducationForm } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { newEducationQuestions } from 'src/assets/project-forms';


@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {

  educationsAreLoading: boolean = false
  educations?: Education[]
  newEducationQuestions = newEducationQuestions
  showEducationForm: boolean = false
  constructor(private educationService: EducationService) {

  }
  ngOnInit(): void {
    this.markEducationsAsLoading()
    this.educationService.getEducations().subscribe(educations => {
      this.educations = educations
      this.markEducationsAsNotLoading()
    })
  }
  markEducationsAsLoading = () => this.educationsAreLoading = true
  markEducationsAsNotLoading = () => this.educationsAreLoading = false

  openEducationForm = () => this.showEducationForm = true
  closeEducationForm = () => this.showEducationForm = false

  addEducation = (newEducation: EducationForm) => {
    this.educationService.addEducation(newEducation).subscribe(education => {
      this.educations = [...this.educations!, education]
      this.closeEducationForm()
    })
  }
  deleteEducation = (educationToRemove: Education) => {
    this.educations = this.educations?.filter(education => education.id != educationToRemove.id)
  }
  updateEducation = (updatedEducation: Education) => {
    this.educations = this.educations?.map(education => education.id === updatedEducation.id ? updatedEducation : education)
  }
}
