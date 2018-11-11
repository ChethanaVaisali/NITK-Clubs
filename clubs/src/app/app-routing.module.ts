import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClubComponent} from './club/club.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {AdminComponent} from './admin/admin.component';
import {AddPostComponent} from './add-post/add-post.component';
import {DeletePostComponent} from './delete-post/delete-post.component';
import {AddStudentMemberComponent} from './add-student-member/add-student-member.component';
import {DeleteStudentMemberComponent} from './delete-student-member/delete-student-member.component';
import {AdminprofileComponent} from './adminprofile/adminprofile.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path : 'club',component: ClubComponent },
  {path : 'profile',component: ProfileComponent },
  {path: 'admin',component:AdminComponent},
  {path: 'addPost',component: AddPostComponent},
  {path: 'deletePost', component: DeletePostComponent},
  {path : 'addStudentMember', component: AddStudentMemberComponent},
  {path: 'deleteStudentMember', component: DeleteStudentMemberComponent},
  {path:'adminprofile',component: AdminprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
