import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <game-header></game-header>
    <router-outlet></router-outlet>
    <game-footer></game-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ps-game-test';

  intApp = () => {
    console.log('Initial app load');
  }
}