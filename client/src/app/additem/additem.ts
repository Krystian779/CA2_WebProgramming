import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Itemsapi } from '../services/itemsapi';

@Component({
  selector: 'app-additem',
  imports: [FormsModule],
  templateUrl: './additem.html',
  styleUrl: './additem.css',
})
export class Additem {
  make = '';
  model = '';
  year = '';
  image = '';

  constructor(private itemsApi: Itemsapi) {}

  addItem(): void {
    if (!this.make || !this.model || !this.year || !this.image) {
      return;
    }

    this.itemsApi.addItem({
      make: this.make,
      model: this.model,
      year: this.year,
      image: this.image,
    });

    this.make = '';
    this.model = '';
    this.year = '';
    this.image = '';
  }
}
