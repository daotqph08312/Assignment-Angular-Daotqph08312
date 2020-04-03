import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import {Class } from "../class";
import {ClassService} from "../class.service";
import {SchollService} from "../scholl.service";
import { School } from '../school';
@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {
   school = new School();
  constructor( 
    private classService:ClassService,
    private schoolService : SchollService,
    private route: Router,
    private activate: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activate.paramMap.subscribe(data =>{
      this.schoolService.getListSchools().subscribe(data=>{
                  this.school = data;
                  console.log(data);
      });

    });
  }
  SaveClass(){
  
  }
}