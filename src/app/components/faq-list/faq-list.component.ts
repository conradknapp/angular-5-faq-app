import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Question } from '../../models/Question';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.css']
})
export class FaqListComponent implements OnInit {
  questions: Question[];

  constructor(public dataService: DataService) { 

  }

  ngOnInit() {
    this.questions = this.dataService.getQuestions();
  }

  addQuestion(question: Question) {
    this.dataService.addQuestion(question);
  }

  removeQuestion(question: Question) {
    this.dataService.removeQuestion(question);
    }

}
