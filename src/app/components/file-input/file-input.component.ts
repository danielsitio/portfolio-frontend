import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FileInputComponent
    }
  ]
})
export class FileInputComponent implements ControlValueAccessor {

  file?: File

  disabled: boolean = false

  touched: boolean = false

  onChange = (file: File) => { }
  onTouched = () => { }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched()
      this.touched = true
    }
  }

  setFile({ target }: Event) {
    this.markAsTouched()
    this.file = (<HTMLInputElement>target).files![0]
    this.onChange(this.file)
  }

  writeValue(file: File): void {
    this.file = file
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
