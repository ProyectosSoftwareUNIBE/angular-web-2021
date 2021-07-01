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
  static END_POINT = 'products'
  public products: ProductModel[];
  private category: string = "";

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.category = params['category']
    });
    this.products = [];
  }

  ngOnInit(): void {
    this.synch();
  }

  synch(): void {
    if (this.category == undefined) {
      this.productService.getAllProducts().subscribe(
        data => {
          this.products = data;
        }
      );
    } else {
      this.productService.getProductByCategory(this.category).subscribe(
        data => {
          this.products = data;
        }
      );
    }
  }

  navigateToProduct(product:ProductModel): void {
    this.router.navigate(["/product/"+product.id]);
  }

}
