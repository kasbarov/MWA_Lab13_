import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { myRoutes } from './app-module-routing.module';
import { FarmersMarketModule } from './farmers-market/farmers-market.module';

import { ErrorComponent } from './error.component';



@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    
   
  ],
  imports: [
    BrowserModule,
    myRoutes, 
    FarmersMarketModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
