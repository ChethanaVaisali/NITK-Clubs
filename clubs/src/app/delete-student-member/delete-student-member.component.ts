import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-student-member',
  templateUrl: './delete-student-member.component.html',
  styleUrls: ['./delete-student-member.component.css']
})
export class DeleteStudentMemberComponent implements OnInit {
  club:any;
  stmembers:any;
  constructor(private adminService: AdminService,
              private flashMessages:FlashMessagesService,
              private cs : CookieService,
              private router: Router) { }

  ngOnInit() {
    this.club=this.cs.getObject('Club');
    this.Data();
  }

  Data(){
    this.adminService.getStudentMembers(this.club).subscribe((data:any)=>{
      console.log(data);
      this.stmembers=data.result;
    });
  }

  DeleteStudent(student_id) {
    const obj={
      student_id:student_id,
      club_id:this.club
    };
   this.adminService.DeleteStudentMember(obj).subscribe((data:any)=>{
     if(data.success){
       this.flashMessages.show("The member is deleted",{cssClass: 'alert-success', timeout : 3000});
       this.Data();
     }
     else{
       this.flashMessages.show("The member cannot be deleted",{cssClass: 'alert-danger', timeout : 3000});
     }
   });
  }

  Logout(){
    this.cs.removeAll();
    this.router.navigate(['/home']);
  }
}
