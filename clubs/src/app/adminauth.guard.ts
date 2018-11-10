import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {ClubService} from './club.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuard implements CanActivate {
  constructor(private ws:ClubService,
              private router:Router){}

  checkAdmin():boolean{
  this.ws.isAdmin();
  if(this.ws.admin){
  return true;
}
else {
  this.router.navigate(['/home']);
  }
}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAdmin();
  }
}
