import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {AdminService} from '../admin.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  c:any;
  edate:any;
  name:string;
  tags:string;
  constructor(private cs:CookieService,
              private adminService : AdminService,
              private flashMessage : FlashMessagesService,
              private router:Router) { }

  ngOnInit() {
  this.c=this.cs.getObject('Club');
  }
  AddPost(){
  const obj={
    edate:this.edate,
    club_id:this.c,
    name:this.name,
    tags:this.tags
  };
  this.adminService.Addpost(obj).subscribe((data:any)=>{
    if(data.success){
      this.flashMessage.show("The post is added into the club", {cssClass: 'alert-success', timeout : 3000});
    }
    else{
      this.flashMessage.show("The post cannot be added", {cssClass: 'alert-danger', timeout : 3000});
    }
  });
  }

  Logout(){
    this.cs.removeAll();
    this.router.navigate(['/home']);
  }
}
