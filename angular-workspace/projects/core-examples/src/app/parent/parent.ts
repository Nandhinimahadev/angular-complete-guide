import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child],
  templateUrl: './parent.html',
  styleUrls: ['./parent.css']
})
export class Parent {
  message = 'Message from Parent Component';

  handleAction(event: string) {
    console.log('Child says:', event);
    alert(event); 
  }
}
