    
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Injectable({
  providedIn: 'root'
})
export class TodosResolver implements Resolve<Observable<Todo[]>> {

  constructor(private todoDataService: TodoDataService) { }

  public resolve(): Observable<Todo[]> {
    return this.todoDataService.getAllTodos();
  }
}