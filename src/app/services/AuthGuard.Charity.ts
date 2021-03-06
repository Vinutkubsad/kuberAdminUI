import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from "@angular/router";
import { DataService } from "./data.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGaurd1 implements CanActivate{
     constructor(private authService: DataService, public router:Router ){}
   canActivate(route :ActivatedRouteSnapshot,state: RouterStateSnapshot){
     let tocken = localStorage.getItem('jwt');
     if(tocken){
       return true;
     }
     this.router.navigate(['/charityUser/signin']);
      return false;
   }
}