import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { StoreComponent } from './store/store.component';
import { GroupComponent } from './group/group.component';
import { GamesComponent } from './games/games.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
