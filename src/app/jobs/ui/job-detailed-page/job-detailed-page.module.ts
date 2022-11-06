import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailedPageComponent } from './job-detailed-page.component';
import { MatIconModule } from '@angular/material/icon';
import { DateAgoModule } from '../pipes/date-ago.module';
import { RouterModule } from '@angular/router';
import { GoogleMapModule } from '../google-map/google-map.module';


@NgModule({
  declarations: [
    JobDetailedPageComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    DateAgoModule,
    RouterModule,
    GoogleMapModule
  ],
  exports: [
    JobDetailedPageComponent
  ]
})
export class JobDetailedPageModule { }
