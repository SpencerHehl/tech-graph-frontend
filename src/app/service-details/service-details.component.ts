import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {

  service = {
    id: '1',
    overview: {
      repository: 'https://github.com/ArcherFRS/Service-Telemetry',
      name: 'Telemetry Service',
      description: 'The service responsible for providing telemetry data to a given front end',
      type: 'Backend',
      version: 'v1.0.4',
      language: 'Typescript',
    },
    repo_info: {
      branches: [
        {
          name: 'Example',
          link: '#'
        },
        {
          name: 'Example',
          link: '#'
        }
      ],
      commits: [
        {
          description: 'Example',
          link: '#'
        },
        {
          description: 'Example',
          link: '#'
        }
      ],
      pull_requests: [
        {
          name: 'Example',
          link: '#'
        },
        {
          name: 'Example',
          link: '#'
        }
      ],
      forks: [
        {
          name: 'Example',
          link: '#'
        },
        {
          name: 'Example',
          link: '#'
        }
      ]
    },
    repo_stats: {},
    dependency_info: {},
    work_records: {

    },
    statistics: {
      git_stats: {

      },
      test_stats: {

      },
      health_metrics: {

      },
      security_metrics: {

      },
    }
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
