import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanActivateTodosGuard } from './can-activate-todos.guard';
import { TodosResolver } from './todo.resolver';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'signout',
    component: SignoutComponent
  },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [ CanActivateTodosGuard ],
    resolve: {
      todos: TodosResolver
    }
  },
  
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }