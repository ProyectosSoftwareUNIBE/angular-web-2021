import { Component, OnDestroy, OnInit} from '@angular/core';
import { ProductModel } from "../models/product.model";
import { ProductService } from "../api/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit,OnDestroy {
  static END_POINT = 'products/:category'
  public products: ProductModel[];
  private category: string | null;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router,location:Location) {
    this.category = this.route.snapshot.paramMap.get('category');
    this.products = [];
    location.subscribe(val => console.log(val));
  }

  ngOnInit(): void {
    this.synch();

  }

  ngOnDestroy():void {
    this.category = this.route.snapshot.paramMap.get('category');
    console.log(this.category);
  }

  synch(): void {
    if (this.category !== null) {
      this.productService.getProductByCategory(this.category).subscribe(
        data => {
          this.products = data;
        }
      );
    }
  }

  navigateToProduct(product: ProductModel): void {
    this.router.navigate(["/product/" + product.id]);
  }

}
