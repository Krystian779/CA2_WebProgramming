import { Component } from '@angular/core';
import { Additem } from '../additem/additem';
import { Listitems } from '../listitems/listitems';

@Component({
  selector: 'app-home',
  imports: [Additem, Listitems],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
