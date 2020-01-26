import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { gameComponent } from './components/gameComponent/game.component';
import { welcomeComponent } from './components/welcomeComponent/welcome.component';
import { headerComponent } from './components/constantComponents/headerComponent/header.component';
import { footerComponent } from './components/constantComponents/footerComponent/footer.component';

import { StoreModule } from '@ngrx/store';
import { playersReducer } from './reducers/players.reducer';

@NgModule({
  declarations: [
    AppComponent,
    gameComponent,
    welcomeComponent,
    headerComponent,
    footerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      players: playersReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
