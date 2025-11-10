import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormData {
   saveUser(data: any) {
    console.log('User saved:', data);
  }
 
}
