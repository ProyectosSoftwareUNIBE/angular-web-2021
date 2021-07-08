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
      name:"Carrito de Compras",
      route:"/shopping-cart"
    }
  ]
  navItems2=[
    
    {
      name:"GPU",
      route:"/products/GPU"
    },
    {
      name:"CPU",
      route:"/products/CPU"
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

  test(nav:any):void{
    this.router.navigate([nav.route]);
  }


}
