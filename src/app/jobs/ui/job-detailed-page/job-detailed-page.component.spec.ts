import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailedPageComponent } from './job-detailed-page.component';

describe('JobDetailedPageComponent', () => {
  let component: JobDetailedPageComponent;
  let fixture: ComponentFixture<JobDetailedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDetailedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetailedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
