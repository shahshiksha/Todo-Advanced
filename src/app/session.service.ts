import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public accessToken: string;
  public name: string;

  constructor( ) { }

  getAccessToken() {
    return this.accessToken;
  }

  setAccessToken(value: string) {
    this.accessToken = value;
  }
  public destroy(): void {
    this.accessToken = null;
    this.name = null;
  }

}