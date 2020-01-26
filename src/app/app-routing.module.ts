import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { gameComponent } from './components/gameComponent/game.component';
import { welcomeComponent } from './components/welcomeComponent/welcome.component';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'game', component: gameComponent},
  {path: 'welcome', component: welcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
