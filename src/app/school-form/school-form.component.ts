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
    this.activate.paramMap.subscribe( params =>{
        let schoolsID = params.get('id');
        if(schoolsID != null){
          this.schoolService.getListSchoolbyId(schoolsID).subscribe(data =>{
              this.newSchool.setValue(data);
          })
        }
    });
  }
  SaveSchool(){
    if(this.newSchool.value.id != null){
      this.schoolService.updateSchool(this.newSchool.value).subscribe(data =>{
      this.route.navigate(['dashboard']);
    });
    }else{
  this.schoolService.addSchool(this.newSchool.value).subscribe(data =>{
      this.route.navigate(['dashboard']);
    });
    }
  
  }
    RemoveSchool(id){
      console.log(id);
    // this.schoolService.deleteSchool(id).subscribe(data =>{
    
    // this.route.navigate(['dashboard']);
    // });
  }

}