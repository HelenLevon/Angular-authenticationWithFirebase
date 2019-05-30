import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, CanLoad } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../core/user.service';


@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserService,
    private router: Router
  ) {}

  canLoad(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(user => {
        this.router.navigate(['gallery']);
        
        return resolve(false);
      }, err => {
        return resolve(false);
      })
    })
  }
  
  canActivate(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(user => {
        this.router.navigate(['/user']);
        return resolve(false);
      }, err => {
        return resolve(true);
      })
    })
  }
}
