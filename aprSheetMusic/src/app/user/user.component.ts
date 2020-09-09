import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location) { }

  ngOnInit(): void {
    this.getUser();
    this.user$ = this.route.paramMap.pipe(
      switchMap( (params:ParamMap)=>
       this.userService.getUser(+params.get('id'))
       ));
  }
  user: User;
  user$: Observable<User>;
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService
      .getUser(id)
      .subscribe(user => this.user = user);
  }
  goBack(): void {
    this.location.back();
   }
}
