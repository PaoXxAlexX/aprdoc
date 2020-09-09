import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './user-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUserObservable(): Observable<User[]> {
    return of(USERS);
  }
  getUser(id: number): Observable<User> {
    return of(USERS.find(user => user.id === id));
  }
}
