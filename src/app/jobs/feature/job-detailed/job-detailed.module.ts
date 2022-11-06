import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobDetailedRoutingModule } from './job-detailed-routing.module';
import { JobDetailedComponent } from './job-detailed.component';

import { RouterModule } from '@angular/router';
import { JobDetailedPageModule } from '../../ui/job-detailed-page/job-detailed-page.module';

@NgModule({
  declarations: [
    JobDetailedComponent
  ],
  imports: [
    CommonModule,
    JobDetailedRoutingModule,
    RouterModule,
    JobDetailedPageModule
  ],
  exports: [
    JobDetailedComponent
  ]
})
export class JobDetailedModule { }
