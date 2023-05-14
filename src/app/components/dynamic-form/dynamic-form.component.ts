import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { InputType, Question } from 'src/app/model/question';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent<T> implements OnInit {
  @Input() baseObject?: T
  @Input() title?: string
  @Input() disabler?: Observable<boolean>
  @Input() questions: Question[] = []
  @Input() onSubmit!: (parameter: T) => any
  payload?: T
  form!: FormGroup
  shouldDisable!: boolean

  @Input() disabled: boolean = false

  ngOnInit(): void {
    const group: any = {}
    this.questions.forEach(({ key, type, value, required, maxLenght, maxNumber, minNumber }) => {
      let newFormControl = new FormControl(this.baseObject ? (<any>this.baseObject)[key] : value)
      if (type == InputType.TEXT || type == InputType.LARGE_TEXT) newFormControl.addValidators(Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/))
      if (required) newFormControl.addValidators(Validators.required)
      if (maxLenght) newFormControl.addValidators(Validators.maxLength(maxLenght))
      if (maxNumber) newFormControl.addValidators(Validators.max(maxNumber))
      if (minNumber) newFormControl.addValidators(Validators.min(minNumber))
      group[key] = newFormControl
    })
    this.form = new FormGroup(group)
    this.disabler?.subscribe(value => this.shouldDisable = value)
  }

  submit() {
    if (!this.disabler)
      this.shouldDisable = true
    this.payload = this.form.getRawValue() as T
    this.onSubmit(this.payload)
  }



}
