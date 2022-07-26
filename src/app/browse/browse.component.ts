import { Component, OnInit } from '@angular/core';
import { TelecarService } from '../telecar.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  service: TelecarService;
  constructor(service: TelecarService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.getTrips();
  }

}
