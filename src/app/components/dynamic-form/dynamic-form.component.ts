import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/model/question';

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

  @Input() disabled: boolean = false

  ngOnInit(): void {
    const group: any = {}
    this.questions.forEach(({ key, value, required, maxLenght }) => {
      let newFormControl = new FormControl(value)
      if (required) newFormControl.addValidators(Validators.required)
      if (maxLenght) newFormControl.addValidators(Validators.maxLength(maxLenght))

      group[key] = newFormControl
    })
    this.form = new FormGroup(group)
  }

  submit() {

    this.payload = this.form.getRawValue() as T
    this.form!.disable()
    this.onSubmit(this.payload)
  }



}
