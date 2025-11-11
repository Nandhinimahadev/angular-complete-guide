import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isLoggedIn = !!localStorage.getItem('authToken');

  constructor(private router: Router) {}

  toggleLogin() {
    if (this.isLoggedIn) {
      localStorage.removeItem('authToken');
      this.isLoggedIn = false;
    } else {
      localStorage.setItem('authToken', 'fake-jwt-token');
      this.isLoggedIn = true;
    }
  }

}
