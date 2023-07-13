import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {
    path:"",pathMatch:"full",component:HomeComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"videos",component:VideosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
