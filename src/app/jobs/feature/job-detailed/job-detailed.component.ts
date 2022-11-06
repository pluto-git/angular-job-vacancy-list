import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, map } from 'rxjs';
import { JobInterface } from '../../data-access/models/job.model';
import { JobApiService } from '../../data-access/services/job-api.service';
@Component({
  selector: 'app-job-detailed',
  templateUrl: './job-detailed.component.html',
  styleUrls: ['./job-detailed.component.scss']
})
export class JobDetailedComponent implements OnInit {

  // to manage subscriptions via takeUntil pipable operator!
  private destroy$: Subject<boolean> = new Subject<boolean>();
  job: JobInterface | null | undefined = null;

  constructor(private activatedRoute: ActivatedRoute, private jobApiService: JobApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const id = params['id'];
      this.filterJobData(id);
      console.log(this.job);
    })
  }

  // idk if there is any other API route to get by id... so a hard way
  filterJobData(id: string): void {
    this.jobApiService.getJobBoard()
      .pipe(map((jobs: JobInterface[]) => {
        return jobs.find((job: JobInterface) => job.id === id)
      }
      ))
      .subscribe(job => this.job = job);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }



}
