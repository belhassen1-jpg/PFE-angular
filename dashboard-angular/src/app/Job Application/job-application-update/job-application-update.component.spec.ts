import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationUpdateComponent } from './job-application-update.component';

describe('JobApplicationUpdateComponent', () => {
  let component: JobApplicationUpdateComponent;
  let fixture: ComponentFixture<JobApplicationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplicationUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
