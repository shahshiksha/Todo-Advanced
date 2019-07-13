import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Todo } from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private api: ApiService) { }

  addTodo(todo: Todo): Observable<Todo> {
    debugger;
    return this.api.createTodo(todo);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  toggleTodoComplete(todo: Todo): Observable<Todo> {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }

  deleteTodo(todo: Todo) {
    // Call api
    return this.api.deleteTodo(todo);
  }
  doSignout(todo: Todo){
    return this.api.signOut(todo);
  }
}