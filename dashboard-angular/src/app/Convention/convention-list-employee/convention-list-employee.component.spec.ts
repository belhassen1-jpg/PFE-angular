import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionListEmployeeComponent } from './convention-list-employee.component';

describe('ConventionListEmployeeComponent', () => {
  let component: ConventionListEmployeeComponent;
  let fixture: ComponentFixture<ConventionListEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConventionListEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConventionListEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
