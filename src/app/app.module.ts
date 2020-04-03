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
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolFormComponent } from './school-form/school-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { UserService } from './user.service';
const layout = [
  {path: 'home', component:DashboardComponent
  , children: [
     {path:'dashboard', component:SchoolComponentComponent},
      {path: 'editSchool/:id', component:SchoolFormComponent},
      {path: 'addSchool', component:SchoolFormComponent}, 
      {path: 'deleteSchool/:id', component:SchoolComponentComponent}, 
      {path: 'index', component:IndexComponent}, 
      {path: 'class/:id', component: ClassComponentComponent}
  ]
  },
  {path: '', component:LoginComponent}
  
]
@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpClientModule,FontAwesomeModule,ReactiveFormsModule,
   RouterModule.forRoot(layout)
  ],
  
  declarations: [ AppComponent, HelloComponent,  ClassComponentComponent, SchoolComponentComponent, DashboardComponent, SchoolFormComponent, HeaderComponent, FooterComponent, TopbarComponent, LoginComponent, IndexComponent,  ],
  bootstrap:    [ AppComponent ],
  providers: [SchollService, ClassService, UserService]
})
export class AppModule { }
