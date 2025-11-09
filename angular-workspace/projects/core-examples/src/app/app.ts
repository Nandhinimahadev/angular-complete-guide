import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logger } from './logger';
import { Parent } from './parent/parent';
import { TruncatePipe } from './truncate-pipe';
import { Highlight } from './highlight';

@Component({
  selector: 'app-root',
    standalone: true,
  imports: [Parent,  TruncatePipe,Highlight],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private logger: Logger) {}

  ngOnInit() {
    this.logger.log('Core Examples App Loaded Successfully!');
  }
}
