import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersAddComponent } from './job-offers-add.component';

describe('JobOffersAddComponent', () => {
  let component: JobOffersAddComponent;
  let fixture: ComponentFixture<JobOffersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOffersAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOffersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
