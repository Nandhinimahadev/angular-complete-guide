import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logger {
    log(message: string) {
    console.log(`[Logger] ${message}`);
  }
  warn(message: string) {
    console.warn(`[Logger Warning] ${message}`);
  }
  error(message: string) {
    console.error(`[Logger Error] ${message}`);
  }

}
