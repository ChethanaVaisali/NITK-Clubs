import { Component, OnInit } from '@angular/core';
import { ClubService } from './../club.service';
import { Router } from '@angular/router';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: number;
  password: number;
  o:any;

  constructor(private _clubService: ClubService,
              private router: Router,
              private cs: CookieService,
              private flashMessage :FlashMessagesService) { }

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
     if(data.success){
       this.o=this.cs.getObject('Session');
       console.log(this.o);
       if(this.o.row[0].student_id==1){
         this.cs.putObject('Club',1);
         this.router.navigate(['/admin']);
       }
       else{
         if(this.o.row[0].student_id==2){
           this.cs.putObject('Club',2);
           this.router.navigate(['/admin']);
         }
         else{
           if(this.o.row[0].student_id==3){
             this.cs.putObject('Club',3);
             this.router.navigate(['/admin']);
           }
           else{
             if(this.o.row[0].student_id==4){
               this.cs.putObject('Club',4);
               this.router.navigate(['/admin']);
             }
             else{
               this.router.navigate(['/club']);
             }
           }
         }
       }

     }
     else{
      this.flashMessage.show("Invalid User- Try again",{cssClass: 'alert-danger', timeout : 10000});
     }
   });

  }
}
