import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobBoardRoutingModule } from './job-board-routing.module';
import { JobBoardComponent } from './job-board.component';

import { JobApiService } from '../../data-access/services/job-api.service';
import { JobCardModule } from '../../ui/job-card/job-card.module';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    JobBoardComponent
  ],
  imports: [
    CommonModule,
    JobBoardRoutingModule,
    JobCardModule,
    NgxPaginationModule
  ],
  exports: [
    JobBoardComponent
  ],
  providers: [JobApiService]
})
export class JobBoardModule { }
