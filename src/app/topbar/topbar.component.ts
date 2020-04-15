import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import {Router,ActivatedRoute} from "@angular/router"
import { TranslocoService } from '@ngneat/transloco';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
    nameUser: String = '';
  constructor(  private authService: AuthService,
                private route: Router) { }

  ngOnInit() {
    this.nameUser = localStorage.getItem('nameUser');
    console.log(this.nameUser);
  }
   signOut(): void {
  
    this.authService.signOut();
    this.route.navigate(['']);

  }
}