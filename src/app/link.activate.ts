import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LinkActivate implements CanActivate{
    constructor(private router:Router){}
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        let user = window.sessionStorage.getItem("user");
        if(user){
            return true;
        }else{
            this.router.navigate(['/home']);
        }
    }

}