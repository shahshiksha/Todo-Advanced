import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateTodosGuard implements CanActivate {

  constructor( private auth: AuthService,
               private router: Router) {

  }

  public canActivate(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot ): Observable<boolean> | boolean {
    if (this.auth.isSignedIn()) {
      return true;
    }

    console.error('Access Denied');
    this.router.navigate(['/sign-in']);
    return false;
  }
}