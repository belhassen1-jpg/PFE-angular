import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobofferApplicationComponent } from './joboffer-application.component';

describe('JobofferApplicationComponent', () => {
  let component: JobofferApplicationComponent;
  let fixture: ComponentFixture<JobofferApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobofferApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobofferApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
