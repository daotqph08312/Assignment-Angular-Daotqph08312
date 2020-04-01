import { Component } from '@angular/core';
import { faCar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
    message = 'Car';
  faCar = faCar;
}
