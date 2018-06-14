import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmDetailsComponent } from "./farmers-market/farm-details.component";
import { FarmsComponent } from "./farmers-market/farms.component";
import { LayoutComponent } from "./farmers-market/layout.component"
import { FarmDetailsGuard } from './farmers-market/FarmDetailsGuard';
import { ErrorComponent } from './error.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
children: [
  { path: 'farm', component: FarmsComponent,
children :[
  { path: 'farmDetails/:id', component: FarmDetailsComponent, canActivate: [FarmDetailsGuard] },
  { path: 'farmDetails', component: FarmDetailsComponent, canActivate: [FarmDetailsGuard] }

] }
]
},
  
 {path:'error', component:ErrorComponent},
  { path: '**', redirectTo: '/' }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//    exports: [RouterModule]
// })
//export class AppModuleRoutingModule { }
export const myRoutes = RouterModule.forRoot(routes);