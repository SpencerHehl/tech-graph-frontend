import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  itemList = {
    name: '',
    list: [],
    buttonList: [],
    linkList: []
  };
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
    dependency_info: {
      softwareDependencies: [
        {
          name: 'NodeJS',
          version: 'v13.39'
        },
        {
          name: 'NodeJS',
          version: 'v13.39'
        },
        {
          name: 'NodeJS',
          version: 'v13.39'
        }
      ],
      resourceDependencies: [
        {
          id: '394',
          name: 'Archer Backend Cluster',
          version: 'v1.3.0'
        },
        {
          id: '394',
          name: 'Archer Backend Cluster',
          version: 'v1.3.0'
        }
      ]
    },
    function_info: {
      apisPreview: [
        {
          name: 'Get Stuff'
        },
        {
          name: 'Post Stuff'
        },
        {
          name: 'Put Stuff'
        }
      ],
      apis: [
        {
          name: 'Get Stuff'
        },
        {
          name: 'Post Stuff'
        },
        {
          name: 'Put Stuff'
        },
        {
          name: 'Patch Stuff'
        },
        {
          name: 'Delete Stuff'
        }
      ],
      workflowsPreview: [
        {
          name: 'Action Workflow'
        },
        {
          name: 'Streaming Workflow'
        },
        {
          name: 'Get Info Workflow'
        }
      ],
      workflows: [
        {
          name: 'Action Workflow'
        },
        {
          name: 'Streaming Workflow'
        },
        {
          name: 'Get Info Workflow'
        }
      ]
    },
    work_records: {
      num_open_work_items: '6',
      num_feature_reqs: '2',
      num_bugs: '4',
      num_closed_work_items: '16'
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

  viewServiceInfoList(listName) {
    console.log(listName);
    switch (listName) {
      case 'softwareDependencies': {
        this.itemList.name = 'Software Dependencies';
        this.itemList.buttonList = [];
        this.itemList.linkList = [];
        this.itemList.list = this.service.dependency_info.softwareDependencies;
        $('#serviceItemList').modal('show');
        break;
      }
      case 'resourceDependencies': {
        this.itemList.name = 'Resource Dependencies';
        this.itemList.buttonList = [];
        this.itemList.list = [];
        this.itemList.linkList = this.service.dependency_info.resourceDependencies;
        $('#serviceItemList').modal('show');
        break;
      }
      case 'apis': {
        this.itemList.name = 'APIs';
        this.itemList.linkList = [];
        this.itemList.list = [];
        this.itemList.buttonList = this.service.function_info.apis;
        $('#serviceItemList').modal('show');
        break;
      }
      case 'workflows': {
        this.itemList.name = 'Workflows';
        this.itemList.buttonList = [];
        this.itemList.list = [];
        this.itemList.linkList = this.service.function_info.workflows;
        $('#serviceItemList').modal('show');
        break;
      }
    }
  }

}
