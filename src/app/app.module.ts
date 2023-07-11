import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DisplayComponent } from './display/display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { ShotcutsComponent } from './shotcuts/shotcuts.component';
import { StatusComponent } from './status/status.component';
import { CommentsComponent } from './comments/comments.component';
import { WallComponent } from './wall/wall.component';
import { SponsorWallComponent } from './sponsor-wall/sponsor-wall.component';
import { BirthdayWallComponent } from './birthday-wall/birthday-wall.component';
import { ContactsWallComponent } from './contacts-wall/contacts-wall.component';
import { RightBarComponent } from './right-bar/right-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    DisplayComponent,
    MenuItemsComponent,
    ShotcutsComponent,
    StatusComponent,
    CommentsComponent,
    WallComponent,
    SponsorWallComponent,
    BirthdayWallComponent,
    ContactsWallComponent,
    RightBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
