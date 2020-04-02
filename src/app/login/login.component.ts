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
      message = null;
     username= new FormControl('')
     password= new FormControl('');

  constructor(
    private route: Router,
     private activateRoute:ActivatedRoute,
     private UserService:UserService
  ) {  }

  ngOnInit() {
  }
  login(){
      this.UserService.login(this.username.value).subscribe(data =>{
            if(this.username.value == data.username && this.password.value == data.password){
              console.log('success');
              this.route.navigate(['home/index']);
            }else{
              this.message = 'Tài Khoản Hoặc Mật Khẩu không đúng';
               this.route.navigate(['']);
               
            }
      });
      
  }
}