import {Injectable} from '@angular/core';
import {ItemModel} from "../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items: ItemModel[] = [];

  constructor() {

  }

  addItem(item: ItemModel): void {
    this.items.push(item);
  }

  getShoppingCart(): ItemModel[] {
    return this.items;
  }

}
