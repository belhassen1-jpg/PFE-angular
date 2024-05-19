import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDeleteEmployeeComponent } from './event-delete-employee.component';

describe('EventDeleteEmployeeComponent', () => {
  let component: EventDeleteEmployeeComponent;
  let fixture: ComponentFixture<EventDeleteEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDeleteEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDeleteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
