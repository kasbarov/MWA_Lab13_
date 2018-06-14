import { Component, OnInit, Input } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'app-farms',
  template: `
  
   <ul>
   <li *ngFor ='let farm of farms' > 
    <a [routerLink]="[ 'farmDetails', farm._id]">{{farm.Farm}}</a>
   
    </li>
  
   </ul>
   <router-outlet  ></router-outlet>
  `,
  styles: []
})
export class FarmsComponent implements OnInit {

  farms: {}[];

  constructor(private dbService: DbService) {
    this.farms = dbService.getData();
  }

  ngOnInit() {
  }

}
