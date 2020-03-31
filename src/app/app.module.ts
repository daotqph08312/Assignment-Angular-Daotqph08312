import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SchollService } from './scholl.service';
import { ClassService } from './class.service';
import { ClassComponentComponent } from './class-component/class-component.component';
import { SchoolComponentComponent } from './school-component/school-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,
   RouterModule.forRoot([
     {path:'', component:SchoolComponentComponent},
     {path: 'class/id', component:ClassComponentComponent}
      
    ])
  ],
  
  declarations: [ AppComponent, HelloComponent,  ClassComponentComponent, SchoolComponentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SchollService, ClassService]
})
export class AppModule { }
