import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrls: ['./child.css']
})
export class Child {
  @Input() message!: string;
  @Output() action = new EventEmitter<string>();

  notifyParent() {
    this.action.emit('Hello Parent!');
  }
}
