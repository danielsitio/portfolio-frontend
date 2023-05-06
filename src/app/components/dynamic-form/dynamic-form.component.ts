import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/model/question';
import { Project } from "src/app/model/project";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent<T> implements OnInit {

  @Input() questions: Question[] = []
  @Input() onSubmit!: (parameter: T) => any
  payload?: T
  form!: FormGroup

  ngOnInit(): void {
    const group: any = {}
    this.questions.forEach(question => {
      group[question.key] = question.required ?
        new FormControl(question.value, Validators.required) : new FormControl(question.value)
    })
    this.form = new FormGroup(group)
  }

  submit() {
    console.log(JSON.stringify(this.form.getRawValue()))
    this.payload = this.form.getRawValue() as T
    this.onSubmit(this.payload)
  }



}
