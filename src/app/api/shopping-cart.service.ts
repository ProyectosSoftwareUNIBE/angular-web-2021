import {Injectable} from '@angular/core';
import {ItemModel} from "../models/item.model";
import {HttpClient} from "@angular/common/http";
import {ShoppingCartModel} from "../models/shopping-cart.model";
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items: ItemModel[] = [];
  private url = 'http://localhost:8080/api/v1/shoppingcart';

  constructor(private http: HttpClient) {

  }

  sendShoppingCart(): Observable<any> {

    let shoppingCart: ShoppingCartModel = {};
    shoppingCart.items = this.items;
    shoppingCart.user = {};
    // @ts-ignore
    shoppingCart.user.id = localStorage.getItem('user');
    console.log(shoppingCart);
    return this.http.post(this.url, shoppingCart).pipe(
      map(response => response),
      catchError(error => {
          console.log(error.error)
          return error
        }
      )
    );

  }

  addItem(item: ItemModel): void {
    this.items.push(item);
  }

  getShoppingCart(): ItemModel[] {
    return this.items;
  }

  deleteItem(position: number): void {
    this.items.splice(position, 1);

  }

  getTotal(): number {
    let total: number = 0;
    this.items.forEach((item) => {
      total += item.amount * item.product.price;
    })
    return total;
  }

}
