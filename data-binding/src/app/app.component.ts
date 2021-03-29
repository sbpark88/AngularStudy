import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  // tslint:disable-next-line:typedef
  changeTitle() {
    this.title = 'GreenDreamTree';
  }
}

