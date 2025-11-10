import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateForm } from './template-form/template-form';
import { ReactiveForm } from './reactive-form/reactive-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TemplateForm, ReactiveForm],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  currentForm: 'template' | 'reactive' = 'template';

  switchForm(formType: 'template' | 'reactive') {
    this.currentForm = formType;
  }
}
