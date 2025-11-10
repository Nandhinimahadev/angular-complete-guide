import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.html',
  styleUrls: ['./template-form.css'],
})
export class TemplateForm {
  user = { name: '', email: '' };
  submitted = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted:', this.user);
      this.submitted = true;
    }
  }
}
