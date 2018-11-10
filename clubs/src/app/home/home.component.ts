import { Component, OnInit } from '@angular/core';
import { ClubService } from './../club.service';
import { Router } from '@angular/router';
import {CookieService} from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: number;
  password: number;

  constructor(private _clubService: ClubService,
              private router: Router,
              private cs: CookieService) { }

  ngOnInit() {
  }

  OnLogin() {
   console.log(this.username);
   console.log(this.password);
   const credential = {
     username: this.username,
     password: this.password,
   };
   this._clubService.Login(credential).subscribe((data:any)=>{
     console.log(data);
     this.cs.putObject('Session',data);
   });
   this.router.navigate(['/club']);
  }
}
