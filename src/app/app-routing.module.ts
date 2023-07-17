import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { StoreComponent } from './store/store.component';
import { GroupComponent } from './group/group.component';
import { GamesComponent } from './games/games.component';
import { BirthdayNotiComponent } from './birthday-noti/birthday-noti.component';
import { BirthdayWallComponent } from './birthday-wall/birthday-wall.component';
import { UploadComponent } from './upload/upload.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  {
    path:"",pathMatch:"full",component:HomeComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"videos",component:VideosComponent
  },
  {
    path:"store",component:StoreComponent
  },
  {
    path:"group",component:GroupComponent
  },
  {
    path:"games",component:GamesComponent
  },
  {
    path:"birthdays",component:BirthdayNotiComponent
  },
  {
    path:"birthday-wall",component:BirthdayWallComponent
  },
  {
    path:"upload",component:UploadComponent
  },
  {
    path:"comment",component:CommentsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
