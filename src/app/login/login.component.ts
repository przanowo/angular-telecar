import { Component, OnInit } from '@angular/core';
import { TelecarService } from '../telecar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  service: TelecarService;
  constructor(service: TelecarService) {
    this.service = service;
  } 
  //dependecies injection minden komponensbe behuzzuk a servicet.

  ngOnInit(): void {
  }

}
