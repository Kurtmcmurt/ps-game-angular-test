import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { gameComponent } from './gameComponent/game.component';
import { welcomeComponent } from './welcomeComponent/welcome.component';
import { headerComponent } from './constantComponents/headerComponent/header.component';

@NgModule({
  declarations: [
    AppComponent,
    gameComponent,
    welcomeComponent,
    headerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
