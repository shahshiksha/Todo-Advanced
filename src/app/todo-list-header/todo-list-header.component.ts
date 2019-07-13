import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {
  newTodo: Todo = new Todo();


  @Output()
  add: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    debugger;

    this.add.emit(this.newTodo);
    this.newTodo = new Todo();

    // emit an event
    // make API call to create todo
    // add the todo to the list
  }

}