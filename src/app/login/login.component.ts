import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router"
import { FormControl,FormGroup } from "@angular/forms";
import {UserService} from '../user.service';
import {User} from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: Router,
     private activateRoute:ActivatedRoute,
     private user:User,
     private UserService:UserService
  ) {  }

  ngOnInit() {
  }

}