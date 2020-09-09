import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  email:string;
  pass:string;
  constructor(public authService: AuthService, public router: Router) { }

  login(email:string,pass:string) {
    this.message = 'Trying to log in ...';
    this.authService.login(email,pass).subscribe(() => {
    if (this.authService.isLoggedIn) {
   const redirectUrl = '/courses';
   this.router.navigate([redirectUrl]);
    }
   else{
   this.message="อีเมลหรือรหัสผ่านไม่ถูกต้อง";
   }
    });
    }
    logout() {
    this.authService.logout();
    }

  ngOnInit(): void {
  }

}
