import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  name = 'Hogwarts';
  age: number;
  admin: boolean;
  address = {
    city: 'Seoul',
    country: 'Korea'
  };
  gender;

  constructor() {
    this.age = 20;
  }

  ngOnInit(): void {
    this.admin = true;
  }

  // tslint:disable-next-line:typedef
  sayHi() {
    return `Hi! my name is ${this.name} and I am ${this.age} years old.`;
  }

  // tslint:disable-next-line:typedef
  isAdmin() {
    return `admin: ${this.admin}`;
  }

}
