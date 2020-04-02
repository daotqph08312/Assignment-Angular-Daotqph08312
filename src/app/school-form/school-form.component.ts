import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router"
import { FormControl,FormGroup } from "@angular/forms";
import {School} from '../school';
import {SchollService} from '../scholl.service';
@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css']
})
export class SchoolFormComponent implements OnInit {
  newSchool = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    logo: new FormControl(''),
    address: new FormControl(''),
    president: new FormControl(''),
    province: new FormControl('')

  })
  constructor( private route: Router,
                private activate : ActivatedRoute,
                private schoolService: SchollService
                ) { }

  ngOnInit() {
  }
  SaveHotel(){
    this.schoolService.addSchool(newSchool).subscribe(data =>{
      this.route.navigate(['dashboard']);
    });
  }

}