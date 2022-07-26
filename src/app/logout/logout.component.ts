import { Component, OnInit } from '@angular/core';
import { TelecarService } from '../telecar.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  service: TelecarService;
  constructor(service: TelecarService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.logout();
  }

}
