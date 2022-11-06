import { Component } from '@angular/core';
import { LoadingService } from '../../data-access/services/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  constructor( public loading: LoadingService){}

}
