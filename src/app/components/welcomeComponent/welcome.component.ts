import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Players } from './../../models/players.model';
import { AppState } from './../../app.state'; 

@Component({
  selector: 'welcome-root',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'] 
})

export class welcomeComponent {

  players: Observable<Players[]>;

  constructor(private store:Store<AppState>) {
    this.players = store.select('players');
  }

}
