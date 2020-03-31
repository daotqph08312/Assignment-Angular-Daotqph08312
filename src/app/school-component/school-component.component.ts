import { Component, OnInit } from '@angular/core';
import {SchollService} from '../scholl.service';
import {School} from '../school';
@Component({
  selector: 'app-school-component',
  templateUrl: './school-component.component.html',
  styleUrls: ['./school-component.component.css']
})
export class SchoolComponentComponent implements OnInit {
  school: Array<School> = [];
  constructor( private schoolService : SchollService) { }

  ngOnInit() {
    this.schoolService.getListSchools().subscribe( data =>{
      console.log(data);
      this.school = data;
    });
  }

}