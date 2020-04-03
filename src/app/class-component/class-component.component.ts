import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import {Class } from "../class";
import {ClassService} from "../class.service";
@Component({
  selector: 'app-class-component',
  templateUrl: './class-component.component.html',
  styleUrls: ['./class-component.component.css']
})
export class ClassComponentComponent implements OnInit {
  schoolID= null;
  constructor(
    private route : Router,
    private activate: ActivatedRoute,
    private classService: ClassService
  ) { }

  ngOnInit(
  ) {
  this.activate.paramMap.subscribe(data =>{
     this.schoolID = data.get('id');
      this.classService.getlistClass(this.schoolID).subscribe(data =>{
        console.log(data);
      });
  });
  }

}