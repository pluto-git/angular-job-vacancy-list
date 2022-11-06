import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategyService } from './shared/data-access/services/custom-preloading-strategy.service';

export enum AppRoutes {
  jobBoard = 'job-board',
  jobDetailed = 'job-detailed'
}

//not lazy loading components directly while it is possible from Angular 14+ (for standalone ones)
//loading as before - through modules.
const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.jobBoard,
    pathMatch: 'full'
  },
  {
    path: AppRoutes.jobBoard,
    loadChildren: () => import('./jobs/feature/job-board/job-board.module').then(m => m.JobBoardModule)
  },
  {
    path: AppRoutes.jobDetailed + '/:id',
    loadChildren: () => import('./jobs/feature/job-detailed/job-detailed.module').then(m => m.JobDetailedModule)
  },
  // let's say we don't have any 404 page...
  {
    path: '**',
    redirectTo: AppRoutes.jobBoard
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
