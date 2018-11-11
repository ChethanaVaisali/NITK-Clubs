import { Component, OnInit } from '@angular/core';
import { ClubService } from './../club.service';
import { Router } from '@angular/router';
import {CookieService} from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {
  o:any;
  clubs: any;
  constructor(private _clubService: ClubService,
              private router: Router,
              private cs: CookieService) { }

  ngOnInit() {
    this.o=this.cs.getObject('Session');
    console.log(this.o);
    this._clubService.getClubs(this.o.row[0].student_id).subscribe((data:any) => {console.log(data); this.clubs=data});
    console.log(this.clubs);
  }

  Change(){
    this.router.navigate(['/admin']);
  }

  Logout(){
    this.cs.removeAll();
    this.router.navigate(['/home']);
  }

}
