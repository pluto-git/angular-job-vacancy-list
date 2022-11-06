import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AppRoutes } from 'src/app/app-routing.module';
import { JobInterface } from '../../data-access/models/job.model';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobCardComponent implements OnInit {

  jobDetailed: string = '/' + AppRoutes.jobDetailed;

  @Input() job: JobInterface | null | any = null;

  constructor() { }

  ngOnInit(): void {

  }

}
