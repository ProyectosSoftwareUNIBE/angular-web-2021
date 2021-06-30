import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from "./menu/menu.component";
import {ItemListComponent} from "./item-list/item-list.component";
import {ItemComponent} from "./item/item.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '', component: MenuComponent,
    children: [
      {path: ItemListComponent.END_POINT, component: ItemListComponent},
      {path: ItemComponent.END_POINT, component: ItemComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
