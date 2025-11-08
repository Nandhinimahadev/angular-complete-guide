import { Component, signal } from '@angular/core';
import { Hello } from './hello/hello';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [ Hello, Counter], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Angular First App';
  userName = 'Nandhini';
}