import { Component } from "@angular/core";

@Component({
  selector: 'game-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class footerComponent {

  int = () => {
    console.log('Game Footer Called');
  }

}