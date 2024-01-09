import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class ToDoService {
  constructor() {}

  getToDos() {
    return ['Learn Angular', 'Pay Bills', 'Do Shopping', 'Test'];
  }
}
