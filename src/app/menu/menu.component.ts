import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  navItems=[
    {
      name:"INICIO",
      route:"/products"
    },
    {
      name:"GPU",
      route:"/products?category=GPU"
    },
    {
      name:"CPU",
      route:"/products?category=CPU"
    },
    {
      name:"Carrito de Compras",
      route:"/shopping-cart"
    }
  ]
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.canBeActivate();
  }

  canBeActivate(): void {
    if (localStorage.getItem('user') === '' || localStorage.getItem('user') === null) this.router.navigate([''])
  }


}
