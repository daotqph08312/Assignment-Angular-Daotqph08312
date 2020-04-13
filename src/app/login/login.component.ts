import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router"
import { FormControl,FormGroup } from "@angular/forms";
import { FormBuilder, Validators } from '@angular/forms';
import {UserService} from '../user.service';
import {User} from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
      loginForm: FormGroup;
    submitted = false;
    message:String = '';
 

  constructor(
    private route: Router,
     private activateRoute:ActivatedRoute,
     private UserService:UserService,
     private formBuider:FormBuilder
  ) {  }

  ngOnInit() {
    this.loginForm = this.formBuider.group({
        username: ['', Validators.required],
        password:['',Validators.required],
        acceptTerms: [true,Validators.requiredTrue]
    });

  }
   get f() { return this.loginForm.controls; }
  login(){
    this.submitted = true ;
     if(this.loginForm.invalid){
       return ;
     }
 console.log(this.loginForm.value.username);
  console.log(this.loginForm.value.password);
 this.UserService.login(this.loginForm.value.username).subscribe(data =>{
            if(this.loginForm.value.username == data.username && this.loginForm.value.password == data.password){
              console.log('success');
              this.route.navigate(['home/index']);
            }else{
              this.message = 'Tài Khoản Hoặc Mật Khẩu không đúng';
               this.route.navigate(['']);
               
            }
      });
     
 
     
      
  }
}