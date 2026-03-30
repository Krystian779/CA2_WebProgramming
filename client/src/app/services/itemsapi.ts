import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cars } from '../models/interface';

@Injectable({
  providedIn: 'root',
})
export class Itemsapi {
  public items = signal<Cars[]>([]);
  private _apiUrl = 'http://54.247.13.61:5050/cars';
  private _http = inject(HttpClient);

  getItems(): void {
    this._http.get<Cars[]>(this._apiUrl).subscribe({
      next: (data) => this.items.set(data),
      error: (err) => console.error('Error fetching items', err),
    });
  }

  addItem(item: Cars): void {
    this._http.post<Cars>(this._apiUrl, item).subscribe({
      next: () => this.getItems(),
      error: (err) => console.error('Error adding item', err),
    });
  }

  deleteItem(id: string): void {
    this._http.delete(`${this._apiUrl}/${id}`).subscribe({
      next: () => this.getItems(),
      error: (err) => console.error('Error deleting item', err),
    });
  }
}
