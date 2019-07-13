import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService,
              private route: ActivatedRoute,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.route.data
    .pipe(
      map((data) => {
        return data.todos;
      })
    )
    .subscribe((results) => {
      this.todos = results;
    });
  }
  doSignOut() {
    this.auth.doSignOut()
    this.router.navigate(['/sign-in'])

  }  

  onAddTodo(todo) {

    // API call
    this.todoDataService
        .addTodo(todo)
        .subscribe(
          (newTodo) => {
              this.todos = this.todos.concat(newTodo);
          }
        );

  }

  getAllTodos() {
    // API call
    this.todoDataService.getAllTodos()
    .subscribe((todos) => {
        this.todos = todos;
    });
  }

  onToggleTodoComplete(todo) {
    // API Call to update
    this.todoDataService.toggleTodoComplete(todo)
      .subscribe((updatedTodo) => {
          todo = updatedTodo;
      });
  }

  onRemoveTodo(todo) {
    // API call to Delete
    this.todoDataService.deleteTodo(todo)
      .subscribe(
        (res) => {
          this.todos = this.todos.filter((item) => {
              return item.id !== todo.id;
          });
        }
        
        
          
        
      );
  }

}
  

