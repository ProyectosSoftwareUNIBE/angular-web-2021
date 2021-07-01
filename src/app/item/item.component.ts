import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductModel} from "../models/product.model";
import {ProductService} from "../api/product.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  static END_POINT = 'product/:id';
  private readonly id: string | null;
  public product: ProductModel = {};

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.sync();

  }

  sync(): void {
    if (this.id !== null) this.productService.getProductBYId(this.id).subscribe(
      data => this.product = data
    )
  }

}
