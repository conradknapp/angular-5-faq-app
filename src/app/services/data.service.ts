import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];
  
  constructor() {
    this.questions = [
      {
        "question": "What is your name?",
        "answer": "Conrad",
        "hide": true
      },
      {
        "question": "Where do you live?",
        "answer": "Ohio",
        "hide": true
      },
      {
        "question": "What is your favorite language?",
        "answer": "JavaScript",
        "hide": true
      }
    ]
  }

  getQuestions() {
    return this.questions;
  }

  addQuestion(question: Question) {
    return this.questions.unshift(question);
  }

  removeQuestion(question: Question) {
    this.questions.map((_, i) => {
      if (question == this.questions[i]) {
        this.questions.splice(i, 1);
      }
    })
  }
}
