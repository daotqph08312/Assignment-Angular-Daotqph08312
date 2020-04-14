import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import {Router,ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
 
  constructor(  private authService: AuthService,
                private route: Router) { }

  ngOnInit() {
  }
   signOut(): void {
    //  authService : localStorage.getItem('authService');
    this.authService.signOut();
    this.route.navigate(['']);
    // console.log('logout')
  }
}