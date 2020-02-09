import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
  listLastUpdated = '02/09/2020 13:39:52';
  serviceList = [
    [
      {
        name: 'Telemetry Service',
        description: 'The service responsible for providing telemetry data to a given front end',
        type: 'Backend',
        version: 'v1.0.4',
        language: 'Typescript',
        num_errors: '7',
        coverage: '87',
        punch_card: '4'
      },
      {
        name: 'Fleet Logistics Service',
        description: 'The service responsible for managing fleet system logistics including customer, device, and point information.',
        type: 'Backend',
        version: 'v1.5.31',
        language: 'Typescript',
        num_errors: '2',
        coverage: '100',
        punch_card: '7'
      }
    ], [
      {
        name: 'State Service',
        description: 'The service responsible for managing the cumulative state of fleet devices.',
        type: 'Backend',
        version: 'v2.1.0',
        language: 'Javascript',
        num_errors: '10',
        coverage: '62',
        punch_card: '5'
      },
      {
        name: 'Airsapce Service',
        description: 'The service responsible for monitoring Airspace traffic and advisories and providing flight status based on the data.',
        type: 'Backend',
        version: 'v1.1.1',
        language: 'Typescript',
        num_errors: '15',
        coverage: '80',
        punch_card: '2'
      }
    ]
  ]
  constructor() { }

  ngOnInit() {
  }

}
