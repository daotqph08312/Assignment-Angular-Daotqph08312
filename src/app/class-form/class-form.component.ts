import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import {Class } from "../class";
import {ClassService} from "../class.service";
import {SchollService} from "../scholl.service";
import { School } from '../school';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {
   school = new School();
   newclass = new FormGroup({
     id: new FormControl(null),
     schoolId: new FormControl(this.school.id),
     name: new FormControl(''),
     roomNumber: new FormControl(''),
     totalStudent: new FormControl(''),
     mainTeacher: new FormControl(''),
    

   })
  image:String =null;
  idClass: Number = 0;
  idSchool: Number = 0;
  constructor( 
    private classService:ClassService,
    private schoolService : SchollService,
    private route: Router,
    private activate: ActivatedRoute
  ) { }
  ngOnInit() {
    
      this.schoolService.getListSchools().subscribe(data=>{
                  this.school = data;
                  
      });
   
this.activate.paramMap.subscribe(data =>{
      this.idClass = parseInt(data.get('idclass'));
      this.idSchool = parseInt(data.get('idschool'));
      this.classService.getClassByID(this.idSchool,this.idClass).subscribe(data=>{
        this.newclass.setValue(data);
      });

         this.schoolService.getListSchoolbyId(this.idSchool).subscribe(data=>{
           this.image = data.logo;
                   console.log(data);
      });
    });
  }
  SaveClass(){
    if(this.newclass.value.id != null){
        this.classService.updateClass(this.newclass.value,this.idClass).subscribe (data=>{
            this.route.navigate(['home/class/'+this.idClass]);
        });
    }else{
    this.classService.addClass(this.newclass.value).subscribe(data =>{
        this.route.navigate(['home/dashboard']);
    });
 
    }

  }
  DeleteClass(){
    if(this.idClass != 0 ){
      this.classService.Delete(this.idSchool,this.idClass).subscribe(data=>{
          this.route.navigate(['home/class/'+this.idSchool]);
      });
    }
  }
}