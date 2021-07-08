import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductModel} from "../models/product.model";
import {ProductService} from "../api/product.service";
import {ShoppingCartService} from "../api/shopping-cart.service";
import {ItemModel} from "../models/item.model";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  static END_POINT = 'product/:id';
  private readonly id: string | null;
  public product: ProductModel = {price:0};
  public amount:number=0;

  constructor(private route: ActivatedRoute, private productService: ProductService, private shoppingCarService: ShoppingCartService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.sync();

  }

  sync(): void {
    if (this.id !== null) this.productService.getProductBYId(this.id).subscribe(
      data => this.product = data
    );
  }

  addItem(): void {
    let item:ItemModel={amount: this.amount,product: this.product};
    this.shoppingCarService.addItem(item);
  }

}
