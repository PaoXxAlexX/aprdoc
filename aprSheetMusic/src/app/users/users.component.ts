import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    this.userService
      .getUserObservable()
      .subscribe(users => this.users = users);
  }
  onSelect(id: number): void {
    this.router.navigate(['/user/'+id]);
  }
}
