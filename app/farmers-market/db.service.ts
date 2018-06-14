import { Injectable } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  farmsData  = [
    {_id:1, Farm:'Natural Prairie', produce:['lettuce', 'tomato']},
    {_id:2, Farm:'Farm 2', produce:['procuct 1', 'procut 2']},
    {_id:3, Farm:'Farm 3', produce:['procuct 3', 'procut 4']}
  ];
  
  constructor() {
    //this.farmsData = 
   }

  getData(){
  
    return this.farmsData;
  }

  getFarmDetails(id:number){
    console.log(this.farmsData);
    //console.log(id);

  //  let y:number = id;
  //  console.log(y)
  //   let x =  this.farmsData.find(farm=>farm['_id']===y);
  //   console.log(x);
    return this.farmsData[id-1];
  //);
  }
}


