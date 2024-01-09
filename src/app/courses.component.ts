import { Component } from '@angular/core';
import { ToDoService } from './todo/todo.service';

@Component({
  selector: 'courses',
  template: `
    <h2>My Courses</h2>
    <div>custom angular component</div>
    <div>No of ToDos : {{ todosCount }}</div>
  `,
})
export class CoursesComponent {
  todosCount: number;
  constructor(todoService: ToDoService) {
    this.todosCount = todoService.getToDos().length;
  }
}
