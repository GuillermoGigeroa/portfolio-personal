import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  processes = 0;
  static = false;
  message?: string;

  add() {
    this.processes += 1;
  }

  remove() {
    this.processes = this.processes - 1 < 0 ? 0 : this.processes - 1;
  }

  getStatus(): boolean {
    if (this.static) {
      return this.static;
    } else {
      return this.processes > 0;
    }
  }

  setStatic(option: boolean) {
    this.static = option;
  }

  setMessage(message?: string) {
    this.message = message;
  }

  clean() {
    this.processes = 0;
  }
}
