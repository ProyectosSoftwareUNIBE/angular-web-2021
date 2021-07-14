import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../api/shopping-cart.service";
import {ItemModel} from "../models/item.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  static END_POINT = 'shopping-cart';
  public items: ItemModel[];
  public total: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.items = []
  }

  ngOnInit(): void {
    this.synch();
  }

  synch(): void {
    this.items = this.shoppingCartService.getShoppingCart();
    this.total = this.shoppingCartService.getTotal();
  }

  deleteItem(position: number): void {
    this.shoppingCartService.deleteItem(position);
    this.synch();
  }

  send(): void {
    this.shoppingCartService.sendShoppingCart().subscribe(
      data => console.log(data)
    );
  }

}
