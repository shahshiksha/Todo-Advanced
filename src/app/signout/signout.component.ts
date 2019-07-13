import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SessionService } from '../session.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {
  auth: any;

  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit() {
    this._authService.doSignOut();
    this.router.navigate(['sign-in']);
  }

}
  
  