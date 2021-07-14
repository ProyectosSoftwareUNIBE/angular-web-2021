import {ItemModel} from "./item.model";
import {UserModel} from "./user.model";

export interface ShoppingCartModel{
  items?:ItemModel[];
  user?:UserModel;
}
