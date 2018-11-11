import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
  club:any;
  events:any;
  constructor(private adminService: AdminService,
              private flashMessages:FlashMessagesService,
              private cs : CookieService,
              private router: Router) { }

  ngOnInit() {
  this.club=this.cs.getObject('Club');
  this.adminService.getEvents(this.club).subscribe((data:any)=>{
    this.events=data.result;
    console.log(this.events);
  });
  }

  DeletePost(event_id){
    this.adminService.DeletePost(event_id).subscribe((data:any)=>{
      if(data.success){
        window.location.reload();
      }
      else{
        this.flashMessages.show("The post cannot be deleted",{cssClass:'alert-danger',timeout:5000});
      }
    })
  }


  Logout(){
    this.cs.removeAll();
    this.router.navigate(['/home']);
  }
}
