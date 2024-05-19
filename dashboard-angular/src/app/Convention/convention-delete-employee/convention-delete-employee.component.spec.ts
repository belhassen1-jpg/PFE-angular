import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionDeleteEmployeeComponent } from './convention-delete-employee.component';

describe('ConventionDeleteEmployeeComponent', () => {
  let component: ConventionDeleteEmployeeComponent;
  let fixture: ComponentFixture<ConventionDeleteEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConventionDeleteEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConventionDeleteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

