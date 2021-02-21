import {Component} from '@angular/core';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  name: string;

  setName = (name: string) => {
    this.name = name;
  }
}

