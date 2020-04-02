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
  id:Number = null;
  image:String = null;
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
             this.id = schoolsID;
             this.showImage();
          })
        }
    });

  }
  SaveSchool(){
    if(this.newSchool.value.id != null){
      this.schoolService.updateSchool(this.newSchool.value).subscribe(data =>{
      this.route.navigate(['home/dashboard']);
    });
    }else{
  this.schoolService.addSchool(this.newSchool.value).subscribe(data =>{
      this.route.navigate(['home/dashboard']);
    });
    }
  
  }
    RemoveSchool(){
    this.schoolService.deleteSchool(this.id).subscribe(data =>{
    this.route.navigate(['home/dashboard']);
    });
  }
  showImage(){
         if(this.id != null){
            this.schoolService.getListSchoolbyId(this.id).subscribe(data =>{
             this.image = data.logo;
          })
         }
  }

}