import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmsComponent } from './farms.component';
import { FarmDetailsComponent } from './farm-details.component';
import { myRoutes } from '../app-module-routing.module';
import { RouterModule, Routes, Router } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { FarmDetailsGuard } from './FarmDetailsGuard';

@NgModule({
  imports: [
    BrowserModule,
    myRoutes,
    RouterModule
  ],
  declarations: [FarmsComponent, FarmDetailsComponent, LayoutComponent],
  exports: [FarmsComponent, FarmDetailsComponent, LayoutComponent],
  providers: [FarmDetailsGuard,  {provide: Router, 
    useClass: class { navigate = jasmine.createSpy("navigate"); }}]
})
export class FarmersMarketModule { }
