import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostComponent } from './post/post.component';
import { MypostsComponent } from './myposts/myposts.component';
import { EditpostComponent } from './editpost/editpost.component';
import { LayoutComponent } from './layout/layout.component';
import { AllpostsComponent } from './allposts/allposts.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [PostComponent, MypostsComponent, EditpostComponent, LayoutComponent, AllpostsComponent, ProfileComponent, NavbarComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
