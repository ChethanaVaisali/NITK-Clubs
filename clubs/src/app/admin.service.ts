import { Injectable } from '@angular/core';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient ,
              private cs: CookieService,
              private router: Router) { }

  Addpost(object) {
    let headers=new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/addPost',object,{headers:headers}).pipe(map(res=>{
      return res;
    }));

  }

  getEvents(id){
    return this.http.get('http://localhost:3000/api/events/'+ id).pipe(map(res=>{
      console.log(res);
      return res;
    }));
  }

  DeletePost(id){
    let url="http://localhost:3000/api/deletePost/"+id;
    return this.http.delete(url).pipe(map(res=>{
      console.log(res);
      return res;
    }));
  }

  AddStudentMember(object){
    let headers=new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/addStudentMember',object,{headers:headers}).pipe(map(res=>{
      return res;
    }));
  }

  getStudentMembers(club_id){
    return this.http.get("http://localhost:3000/api/getStudentMembers/"+club_id).pipe(map(res=>{
      console.log(res);
      return res;
    }));
  }

  DeleteStudentMember(object){
    let headers=new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/deleteStudentMember',object,{headers:headers}).pipe(map(res=>{
      console.log(res);
      return res;
    }));
  }



}
