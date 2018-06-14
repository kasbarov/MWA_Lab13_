import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from './db.service';

@Component({
  selector: 'app-farm-details',
  template: `
    <p>
        Farm Name: {{farmDetails.Farm}}
        <br>
        Farm Products : {{farmDetails.produce}}
    </p>
  `,
  styles: []
})
export class FarmDetailsComponent implements OnInit {

  id:number;
  farmDetails = {};

  constructor( route:ActivatedRoute, private dbService: DbService) { 
 //   console.log('getting parameters');
    route.params.subscribe(params =>{
     // console.log(params);
      this.id = params['id'];
     // console.log(this.id);
      this.farmDetails = dbService.getFarmDetails(this.id);
//console.log(this.farmDetails);

    })
  }

  ngOnInit() {
  }

}
