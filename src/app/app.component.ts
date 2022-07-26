import { Component } from '@angular/core';
import { TelecarService } from './telecar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telekocsi';

  service: TelecarService;
  constructor(service: TelecarService){
    this.service = service;
  }

}
