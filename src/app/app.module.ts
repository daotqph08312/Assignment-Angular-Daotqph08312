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


@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpClientModule,FontAwesomeModule,
   RouterModule.forRoot([
     {path:'dashboard', component:SchoolComponentComponent},
     {path: 'class/id', component:ClassComponentComponent},
      {path: '', component:DashboardComponent},
      {path: 'addSchool', component:SchoolFormComponent}
    ])
  ],
  
  declarations: [ AppComponent, HelloComponent,  ClassComponentComponent, SchoolComponentComponent, DashboardComponent, SchoolFormComponent, HeaderComponent, FooterComponent, TopbarComponent,  ],
  bootstrap:    [ AppComponent ],
  providers: [SchollService, ClassService]
})
export class AppModule { }
