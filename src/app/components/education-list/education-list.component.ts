import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Education, EducationForm } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { newEducationQuestions } from 'src/assets/project-forms';
import { HttpRequestState } from 'ngx-http-request-state'


@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {
  newEducationQuestions = newEducationQuestions
  $educations?: Observable<HttpRequestState<Education[]>>
  showEducationForm: boolean = false
  constructor(private educationService: EducationService) {

  }
  ngOnInit(): void {
    this.updateEducations()
  }

  updateEducations = () => this.$educations = this.educationService.getEducations()
  closeEducationFormAndUpdate = () => {
    this.closeEducationForm()
    this.updateEducations()
  }

  openEducationForm = () => this.showEducationForm = true
  closeEducationForm = () => this.showEducationForm = false

  addEducation = (newEducation: EducationForm) => {
    this.educationService.addEducation(newEducation).subscribe(this.closeEducationFormAndUpdate)
  }
}
