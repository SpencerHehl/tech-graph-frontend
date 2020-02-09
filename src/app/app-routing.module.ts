import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceListComponent } from './service-list/service-list.component';
import { WorkflowsComponent } from './workflows/workflows.component';
import { InfrastructureOverviewComponent } from './infrastructure-overview/infrastructure-overview.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

const routes: Routes = [
  {path: 'service-list', component: ServiceListComponent},
  {path: 'workflows', component: WorkflowsComponent},
  {path: 'infrastructure', component: InfrastructureOverviewComponent},
  {path: 'service/details/:serviceId', component: ServiceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
