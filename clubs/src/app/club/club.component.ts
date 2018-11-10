import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {ClubService} from '../club.service';
import {Event} from '../event';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {
  club=1;
  list:any;
  o:any;
  comment:string;
  events: Event[];

  constructor(private ws: ClubService,
              private cs : CookieService) { }
  Data(){
    this.events=[];
    this.ws.getEvents(this.club).subscribe((data:any)=>{
      this.list=data.result;
      console.log(this.list[0]);
      for(let i=0;i<this.list.length;i++){
        console.log(this.list[i]);
        this.ws.getThreads(this.list[i].event_id).subscribe((th:any)=>{
          console.log(th);
          var obj = new Event;
          obj.event_id=this.list[i].event_id;
          obj.name=this.list[i].name;
          obj.desc=this.list[i].tags;
          obj.likes=this.list[i].likes;
          obj.threads=th.result;
          console.log(obj);
          this.events.push(obj);
          console.log(this.events);
        })
      }
    });
  }
  ngOnInit() {
    this.Data();
  }
  Change(selected){
    this.club=selected;
    console.log(this.club);
    this.Data();
  }

  UpdateLikes(event_id){
  return this.ws.postLike(event_id).subscribe((res:any)=>{
    console.log(res);
    this.Data();
  })
  }


  AddComment(event_id) {

    this.o=this.cs.getObject('Session');
    console.log(this.o);
    const object={
      event_id:event_id,
      student_name:this.o.row[0].name,
      comment:this.comment
    };
    console.log(object);
    this.ws.postThread(object).subscribe((res:any)=>{
      console.log(res);
      if(res.success)
      {
        this.Data();
      }
      else {
        console.log("Something wrong occured");
      }
    })
  }

}
