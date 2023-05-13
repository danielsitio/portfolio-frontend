import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent<T> {
  @Input() title?: string
  @Input() questions!: Question[]
  @Input() onModalClick!: () => void
  @Input() onSubmit!: (parameter: T) => void
  @Input() disabler?: Observable<boolean>
}
