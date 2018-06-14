import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class FarmDetailsGuard implements CanActivate {

    constructor( private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
     
       // this.router.navigate(['error']);
       console.log('guard');
        let id:number = route.params['id'];

        if(id){
           return this.isValid(id);
        }
    else{
        console.log('invalid url');
        this.router.navigate(['error']);
    }

        
    }

    isValid(id){
        return true;
    }
}