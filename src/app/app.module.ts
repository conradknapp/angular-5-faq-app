import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FaqListComponent } from './components/faq-list/faq-list.component';
import { DataService } from './services/data.service';
import { FaqComponent } from './components/faq/faq.component';
import { AddQuestionComponent } from './components/add-question/add-question.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FaqListComponent,
    FaqComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
