import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LoadingService } from 'src/app/shared/data-access/services/loading.service';
import { JobInterface } from '../../data-access/models/job.model';
import { JobApiService } from '../../data-access/services/job-api.service';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss']
})
export class JobBoardComponent implements OnInit, OnDestroy {

  p = 1; //current page
  jobs: JobInterface[] | null = null;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public jobApiSvc: JobApiService, public loading: LoadingService) { }

  ngOnInit(): void {
    // as async pipe doesn't work with the paginate pipe from ngx-bootstrap
    // we are gonna subscribe manually
    this.jobApiSvc.getJobBoard()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: JobInterface[]) => this.jobs = data)

  }

  trackByFn(index: number, value: JobInterface) {
    return value.id;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
