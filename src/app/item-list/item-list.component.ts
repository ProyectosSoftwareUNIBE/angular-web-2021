import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../models/product.model";
import {ProductService} from "../api/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  static END_POINT = 'products/:category'
  public products: ProductModel[];
  private category: string | null = null;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
    this.products = [];

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.category = params['category'];
      this.synch(this.category);
    });
  }


  synch(category: any): void {
    if (category !== null) {
      this.productService.getProductByCategory(category).subscribe(
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
