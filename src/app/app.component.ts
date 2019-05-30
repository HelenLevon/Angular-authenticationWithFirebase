import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from './core/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  path: string = "";
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.router.navigate(['login']);
    }, (error) => {
      console.log("Logout error", error);
    });
  }
  ifUser(){
    this.path = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
    console.log(this.path);
    console.log((this.path == 'user')?true:false);
    return (this.path == 'user')?true:false;
  }

  /* goGallery(){
    
      this.router.navigate(['gallery']);
    
  } */
}
