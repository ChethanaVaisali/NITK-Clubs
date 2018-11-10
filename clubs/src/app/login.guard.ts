import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {ClubService} from './club.service';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private ws:ClubService,
              private router:Router){}

  checkLogin():boolean {
    this.ws.isLoggedIn();
    this.ws.isAdmin();
    if (!this.ws.login) {
      return true;
    }
    else {
      if(this.ws.admin){
        this.router.navigate(['/admin']);
      }
      else{
        this.router.navigate(['/club']);
      }
    }
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }
}
