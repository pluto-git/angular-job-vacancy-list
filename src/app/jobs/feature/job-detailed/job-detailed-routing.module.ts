import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailedComponent } from './job-detailed.component';

const routes: Routes = [
  {
    path: '',
    component: JobDetailedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobDetailedRoutingModule { }
