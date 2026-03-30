import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Itemsapi } from '../services/itemsapi';

@Component({
  selector: 'app-listitems',
  imports: [NgFor, NgIf],
  templateUrl: './listitems.html',
  styleUrl: './listitems.css',
})
export class Listitems {
  constructor(public itemsApi: Itemsapi) {
    this.itemsApi.getItems();
  }

  deleteItem(id: string): void {
    this.itemsApi.deleteItem(id);
  }
}
