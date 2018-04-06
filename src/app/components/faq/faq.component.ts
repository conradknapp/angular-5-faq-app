import { Component, OnInit, Input } from '@angular/core';

import {DataService } from '../../services/data.service';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  @Input('question') question:Question;

  constructor(public dataService: DataService) {
   }

  ngOnInit() {
  }

}
