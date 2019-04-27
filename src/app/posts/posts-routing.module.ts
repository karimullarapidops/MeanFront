import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllpostsComponent } from './allposts/allposts.component';
import { MypostsComponent } from './myposts/myposts.component';
import { ProfileComponent } from './profile/profile.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'allposts', component: AllpostsComponent },
      { path: 'myposts', component: MypostsComponent },
      { path: 'profile', component: ProfileComponent }
    ] 
  },
  { path: '**', redirectTo: '/notfound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
