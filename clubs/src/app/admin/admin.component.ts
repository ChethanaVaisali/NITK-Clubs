import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  o:any;
  title:string;
  constructor(private cs: CookieService,
              private router : Router) { }

  ngOnInit() {
  this.o=this.cs.getObject('Club');
  console.log(this.o);
  if(this.o==1){
    this.title="IEEE";
  }
  else {
    if(this.o==2){
      this.title="IE";
    }
    else{
      if(this.o==3){
        this.title="Rotoract";
      }
      else{
        if(this.o==4){
          this.title="Artist Forum";
        }
      }
    }
  }
  console.log(this.title);
  }

  Logout(){
    this.cs.removeAll();
    this.router.navigate(['/home']);
  }

}
