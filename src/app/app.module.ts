import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AuthService} from './api/auth.service';
import {MenuComponent} from './menu/menu.component';
import {ItemListComponent} from './item-list/item-list.component';
import {ItemComponent} from './item/item.component';
import {ProductService} from "./api/product.service";
import {ShoppingCartService} from "./api/shopping-cart.service";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ItemListComponent,
    ItemComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
