import { Component, OnInit } from '@angular/core';
import { ToDoService } from './todo.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  //providers: [ToDoService]
})
export class TodoComponent implements OnInit {
  todos: string[] = [];

  constructor(todoService: ToDoService, loggingService: LoggingService) {
    loggingService.logInfo('Calling api to get data');
    this.todos = todoService.getToDos();
    loggingService.logInfo('Finished calling api to get data');
  }

  ngOnInit(): void {}
}
