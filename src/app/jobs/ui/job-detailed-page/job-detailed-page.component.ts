import { Component, AfterViewInit, Input, HostListener } from '@angular/core';
import { JobInterface } from '../../data-access/models/job.model';
import { AppRoutes } from 'src/app/app-routing.module';

export enum Description {
  summary = 'Summary',
  responsibilities = 'Responsopilities:',
  compensation = 'Compensation & Benefits:'
}

@Component({
  selector: 'app-job-detailed-page',
  templateUrl: './job-detailed-page.component.html',
  styleUrls: ['./job-detailed-page.component.scss']
})
export class JobDetailedPageComponent implements AfterViewInit {

  @Input() job: JobInterface | null = null;
  desc: typeof Description = Description; //to slice our description from API
  board = AppRoutes.jobBoard; //route to the board
  map: { height: string, width: string } = {
    width: '300px',
    height: '300px'
  };

  constructor() { }

  ngAfterViewInit(): void {
    // because the Figma model shows white background on both mobile and desktop versions
    const body = <HTMLBodyElement>document.getElementsByTagName('body')[0];
    body.style.backgroundColor = 'white';
  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    //let's assume we don't need to debounce resize events...
    this.changeGoogleMapDimensions()
  }

  ngAfterViewChecked(): void {
    this.changeGoogleMapDimensions()
  }

  // who knows if the map was intended as an image
  private changeGoogleMapDimensions(): void {
    if (<HTMLElement>document.getElementById('contacts')){
      const contactInfo = <HTMLElement>document.getElementById('contacts');
      const rect = contactInfo.getBoundingClientRect();
      this.map = {
        width: rect.width + 'px',
        height: rect.height + 'px'
      }
    }
  }

  sliceDescription(description: string, mode: Description): string | null {

    // returns custom substrings of the description or null;
    if (mode === Description.responsibilities) {
      const firstIdx = description.indexOf(Description.responsibilities);
      const secondIdx = description.indexOf(Description.compensation);
      return (firstIdx !== -1 && secondIdx !== -1) ? description.slice(firstIdx + Description.responsibilities.length, secondIdx) : null;

    } else if (mode === Description.compensation) {
      const firstIdx = description.indexOf(Description.compensation);
      return (firstIdx !== -1) ? description.slice(firstIdx + Description.compensation.length, description.length) : null;

    } else if (mode === Description.summary) {
      const secondIdx = description.indexOf(Description.responsibilities);
      return (secondIdx !== -1) ? description.slice(0, secondIdx) : null;
    }

    return null;
  }



}
