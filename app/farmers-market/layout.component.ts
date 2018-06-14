import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `

  <div>
  <nav>
  <ul>
  <li> <a [routerLink]="['farm']">Farms Market</a> </li> 
  </ul>
  </nav>

  <router-outlet></router-outlet>
  </div>
   
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
