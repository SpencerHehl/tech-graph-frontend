import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  serviceList = [
    [
      {
        name: 'Telemetry Service',
        description: 'The service responsible for providing telemetry data to a given front end'
      },
      {
        name: 'Fleet Logistics Service',
        description: 'The service responsible for managing fleet system logistics including customer, device, and point information.'
      }
    ], [
      {
        name: 'State Service',
        description: 'The service responsible for managing the cumulative state of fleet devices.'
      },
      {
        name: 'Airsapce Service',
        description: 'The service responsible for monitoring Airspace traffic and advisories and providing flight status based on the data.'
      }
    ]
  ]
  constructor() { }

  ngOnInit() {
  }

}
