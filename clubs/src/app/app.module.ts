import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubComponent } from './club/club.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { AdminComponent } from './admin/admin.component';
import { AddPostComponent } from './add-post/add-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { AddStudentMemberComponent } from './add-student-member/add-student-member.component';
import { DeleteStudentMemberComponent } from './delete-student-member/delete-student-member.component';
import { ProfileComponent } from './profile/profile.component';
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubComponent,
    HomeComponent,
    AdminComponent,
    AddPostComponent,
    DeletePostComponent,
    AddStudentMemberComponent,
    DeleteStudentMemberComponent,
    ProfileComponent,
    AdminprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CookieService,FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
