import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CanActivate,
  ActivatedRouteSnapshot,
 RouterStateSnapshot,
 UrlTree,
 CanActivateChild,
 } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree {
    console.log("AuthGuard@CanActivate running");
    let url: string = state.url
    return this.checkLogin(url);
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true|UrlTree {
    return this.canActivate(route, state);
   }
  checkLogin(url: string): true | UrlTree {
    if (this.authService.isLoggedIn) { return true; }
    this.authService.redirectUrl = url;
    return this.router.parseUrl('/login');

  }
}
