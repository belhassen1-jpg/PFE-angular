import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferGetComponent } from './job-offer-get.component';

describe('JobOfferGetComponent', () => {
  let component: JobOfferGetComponent;
  let fixture: ComponentFixture<JobOfferGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOfferGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOfferGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
