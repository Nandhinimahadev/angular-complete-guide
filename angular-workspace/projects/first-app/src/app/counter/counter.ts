import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.html',
  styleUrls: ['./counter.css']
})
export class Counter {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}
