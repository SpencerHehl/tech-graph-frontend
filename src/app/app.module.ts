import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { InfrastructureOverviewComponent } from './infrastructure-overview/infrastructure-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceListComponent,
    ServiceDetailsComponent,
    InfrastructureOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
