import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { User } from '../user';
import { USERS } from '../user-data';
import { UsersComponent } from '../users/users.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}
  email:string='a@a.com';
  pass: string='123456';
  isLoggedIn = false;
  redirectUrl: string;
  login(email:string, pass:string): Observable<boolean> {
  return of((email==this.email && pass==this.pass)?true:false)
 .pipe(
  delay(1000),
  tap(val => this.isLoggedIn = val)
  );
  }
 logout(): void {
  this.isLoggedIn = false;
  }
}
