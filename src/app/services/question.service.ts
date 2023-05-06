import { Injectable } from '@angular/core';
import { Question, DateQuestion } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions(): Question<string>[] {

    let question1 = new DateQuestion({
      key: "skill",
      label: "Habilidad",
      required: true,
      order: 1
    })

    const questions: Question<string>[] = [question1]

    return questions.sort((a, b) => a.order - b.order)

  }

}
