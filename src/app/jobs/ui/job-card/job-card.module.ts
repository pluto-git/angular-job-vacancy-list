import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from './job-card.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DateAgoModule } from '../pipes/date-ago.module';
@NgModule({
  declarations: [
    JobCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
    DateAgoModule
  ],
  exports: [
    JobCardComponent
  ]
})
export class JobCardModule { }
