import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';
import {AdminService} from '../admin.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-student-member',
  templateUrl: './add-student-member.component.html',
  styleUrls: ['./add-student-member.component.css']
})
export class AddStudentMemberComponent implements OnInit {
  club:any;
  name:string;
  constructor(private cs : CookieService,
              private adminService : AdminService,
              private flashMessages:FlashMessagesService,
              private router:Router) { }

  ngOnInit() {
    this.club=this.cs.getObject('Club');
  }
  AddStudentMember(){
    const obj={
      name: this.name,
      club_id:this.club
    };
    this.adminService.AddStudentMember(obj).subscribe((data:any)=>{
      console.log(data);
      if(data.success){
        this.flashMessages.show("The student is added successfully to the club", {cssClass: 'alert-success', timeout : 3000});
      }
      else{
        this.flashMessages.show(data.err.code,{cssClass: 'alert-danger', timeout : 3000});
      }
    })
  }

  Logout(){
    this.cs.removeAll();
    this.router.navigate(['/home']);
  }

}
