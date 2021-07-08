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

  deleteItem(position:number):void{
    this.items.splice(position,1);

  }

  getTotal():number{
    let total:number=0;
    this.items.forEach((item)=>{
      total += item.amount*item.product.price;
    })
    return total;
  }

}
