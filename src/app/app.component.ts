import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FigmaDes';
  headerIn = false
  over(){
    this.headerIn = true
  }
  out(){
    this.headerIn = false
  }
}
