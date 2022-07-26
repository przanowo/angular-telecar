import { Component, OnInit } from '@angular/core';
import { TelecarService } from '../telecar.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  service: TelecarService;
  constructor(service: TelecarService) { 
    this.service = service;
  }

  ngOnInit(): void {
  }

}
