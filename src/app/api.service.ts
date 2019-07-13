import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';
import { SessionService } from './session.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  signOut(todo: Todo) {
    throw new Error("Method not implemented.");
  }
  subscribe(arg0: (response: any) => void, arg1: Promise<boolean>) {
    throw new Error("Method not implemented.");
  }


  constructor(private http: HttpClient,
              private session: SessionService) { }

  public signIn(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/sign-in', {
      username,
      password
    });
  }

  public createTodo(todo: Todo): Observable<Todo> {
    const headers = this.getRequestHeaders();
    return this.http
            .post('http://localhost:3000/todos', todo, { headers })
            .pipe(
              map((response) => {
                return new Todo(response);
              })
            );
  }

  public getAllTodos(): Observable<Todo[]> {
    const headers = this.getRequestHeaders();
    return this.http
            .get('http://localhost:3000/todos', { headers })
            .pipe(
              map((response) => {
                const todos = response as any[];
                return todos.map((todo) => new Todo(todo));
              })
            );
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    const headers = this.getRequestHeaders();
    return this.http
            .put('http://localhost:3000/todos/' + todo.id, todo, { headers })
            .pipe(
              map(response => {
                  return new Todo(response);
              })
            );
  }

  public deleteTodo(todo: Todo): Observable<null> {
    const headers = this.getRequestHeaders();
    return this.http
            .delete('http://localhost:3000/todos/' + todo.id, { headers })
            .pipe(
              map(response => null)
            );
  }

  public getRequestHeaders() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.session.accessToken
    });
    return headers;
  }

  public handleError(error: HttpErrorResponse | any) {
    console.error('ApiService:handleError', error);
  }
}