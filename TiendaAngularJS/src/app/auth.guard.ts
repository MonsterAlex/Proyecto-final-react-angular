import { Injectable } from "@angular/core";
import { CanActive, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private AuthService: AuthService){

  }

  CanActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    return
    this.AuthService.isAuthenticated();
  }
}
