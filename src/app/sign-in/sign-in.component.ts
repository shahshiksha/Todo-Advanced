import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public frm: FormGroup;
  hasFailed = false;

  constructor(private fb: FormBuilder,
              private api: ApiService,
              private auth: AuthService,
              private session: SessionService,
              private router: Router) {
/*    this.username = new FormControl();
    this.password = new FormControl(); */

/*    this.frm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      firstnmae: new FormControl(''),
      lastName: new FormControl(''),
    }); */

    this.frm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  public doSignIn() {
    // get username password
    const username = this.frm.get('username').value; // step 1
    const password = this.frm.get('password').value; // step 2   javascript v8 engine

    // authenticate through API
    this.api.signIn(username, password).subscribe((response: any) => {
        // response.token is to be stored in a session
        this.auth.doSignIn(
          response.token,
          response.name
        );
        // take him to todos page
        this.router.navigate(['todos']);
    },
    (error) => {
      this.hasFailed = true;
    });

  }

}