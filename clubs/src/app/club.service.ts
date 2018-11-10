import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClubService {
  login = false;
  admin = false;
  data:any;
  o: any;

  constructor(private http: HttpClient ,
              private cs: CookieService,
              private router: Router) { }

  isLoggedIn() {
    const o = this.cs.getObject('Session');
    if (typeof o == 'undefined') {
      this.login = false;
    } else {
      this.login = true;
    }
  }

  isAdmin(){
    return true;
  }

  getEvents(id){
    return this.http.get('http://localhost:3000/api/events/'+ id).pipe(map(res=>{
      console.log(res);
      return res;
    }))
  }

  getThreads(id){
    return this.http.get('http://localhost:3000/api/getThreads/'+id).pipe(map(res=>{
      console.log(res);
      return res;
    }))
  }

  postThread(object){
    let headers=new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/thread',object,{headers:headers}).pipe(map(res=>{
      console.log(res);
      return res;
    }))
  }

  postLike(event_id){
    let headers=new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const obj={
      id:event_id
    };
    return this.http.post('http://localhost:3000/api/updateLike',obj,{headers:headers}).pipe(map(res=>{
      console.log(res);
      return res;
    }))
  }

  Login(credential) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post('http://localhost:3000/api/login', credential, httpOptions).pipe(map((res: any) => {
      console.log(res);
      this.data = res;
      return res;
    }));

  }
}
